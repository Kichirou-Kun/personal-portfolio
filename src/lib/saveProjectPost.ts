import { firestore } from "firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const saveProjectPost = async (data: PromiseRejectedResult) => {
  await setDoc(doc(firestore, "projectsSection", `${Date.now()}`), data, {
    merge: true,
  });
  toast.success("Update Successfully!");
};
