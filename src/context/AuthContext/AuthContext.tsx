import React, { PropsWithChildren } from "react";
import { toast } from "react-toastify";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, firestore } from "../../../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export const AuthContext = React.createContext({});

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = React.useState<any>(null);
  const router = useRouter();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          id: user.uid,
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signup = React.useCallback(
    (email: string, password: string, username: string) => {
      return createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
          const ref = doc(firestore, "users", result.user.uid);
          const docRef = await setDoc(ref, { username })
            .then((re) => {
              toast.success("Register Successfully");
              router.push("/");
            })
            .catch((e) => {
              toast.error(`${e.message}`);
            });
        })
        .catch((e) => {
          if (e.code == "auth/email-already-in-use") {
            toast.error("Email is Already Exit : Try Another Email");
          } else if (e.code == AuthErrorCodes.WEAK_PASSWORD) {
            toast.error("Password Must be 6 character");
          } else {
            toast.error(`${e.message}`);
          }
        });
    },
    []
  );
  const signin = React.useCallback((email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }, []);

  const signout = React.useCallback(async () => {
    setUser(null);
    await signOut(auth);
  }, []);
  const value = React.useMemo(
    () => ({
      user,
      signup,
      signin,
      signout,
    }),
    [user, signup, signin, signout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
type ContextStateType = any & {
  signin: (email: string, password: string) => void;
  signup: (email: string, password: string, username: string) => void;
  signout: () => void;
};
export const useAuth = () => {
  const context = React.useContext<ContextStateType>(AuthContext);
  if (context === undefined)
    throw new Error(`useUI must be used within a UIProvider`);

  return context;
};
