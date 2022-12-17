import { firestore } from "firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { HeroDataType } from "src/types/heroType";

export const saveProjectPost = async (data: HeroDataType) => {
  await setDoc(doc(firestore, "projectsSection", `${Date.now()}`), data, {
    merge: true,
  });
  toast.success("Update Successfully!");
};
