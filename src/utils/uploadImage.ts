import { storage } from "firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";

export const uploadImage = (imageFile: any, setImageAsset: any) => {
  const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
  const uploadTask = uploadBytesResumable(storageRef, imageFile);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const uploadProgress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    },
    (error) => {
      console.log(error);
      toast.error("Error while uploading : Try Again 🙇");
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
        console.log("downloadURL", downloadURL);

        setImageAsset(downloadURL);
        toast.success("Image Uploaded Successfull 😊");
      });
    }
  );
};
