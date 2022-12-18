import { firestore } from "firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { skillsDataType } from "src/types/dataTypes";

export const saveSkillPost = async (data: skillsDataType) => {
  await setDoc(doc(firestore, "skillsSection", `${Date.now()}`), data, {
    merge: true,
  });
  toast.success("Update Successfully!");
};
