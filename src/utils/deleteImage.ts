import { storage } from "firebase.config";
import { deleteObject, ref } from "firebase/storage";
import { toast } from "react-toastify";

export const deleteImages = (imageAsset: any, setImageAsset: any) => {
  const deleteRef = ref(storage, imageAsset);
  deleteObject(deleteRef).then(() => {
    setImageAsset(null);
    toast.success("Image deleted successfully 😊");
  });
};
