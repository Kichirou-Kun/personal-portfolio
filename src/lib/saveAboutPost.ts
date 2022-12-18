import { firestore } from "firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { aboutDataType } from "src/types/dataTypes";

export const saveAboutPost = async (data: aboutDataType) => {
  await setDoc(doc(firestore, "aboutSection", `${Date.now()}`), data, {
    merge: true,
  });
  toast.success("Update Successfully!");
};
