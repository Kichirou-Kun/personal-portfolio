import { firestore } from "firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { HeroDataType } from "src/types/dataTypes";

export const saveContactPost = async (data: HeroDataType) => {
  await setDoc(doc(firestore, "contactSection", `${Date.now()}`), data, {
    merge: true,
  });
  toast.success("Update Successfully!");
};
