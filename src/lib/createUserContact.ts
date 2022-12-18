import { firestore } from "firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { userContactType } from "src/types/dataTypes";

export const createUserContact = async (data: userContactType) => {
  await setDoc(doc(firestore, "userContact", `${Date.now()}`), data, {
    merge: true,
  });
  toast.success("Contact Successfully!");
};
