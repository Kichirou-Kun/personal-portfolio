import { firestore } from "firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { HeroDataType } from "src/types/dataTypes";

export const saveHeroPost = async (data: HeroDataType) => {
  await setDoc(doc(firestore, "heroBanner", `${Date.now()}`), data, {
    merge: true,
  });
  toast.success("Update Successfully!");
};
