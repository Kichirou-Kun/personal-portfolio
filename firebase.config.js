// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsooexOV_xgKuVwcRlSsWU2Oyzgi-Lt3g",
  authDomain: "personal-portfolio-9313f.firebaseapp.com",
  databaseURL: "https://personal-portfolio-9313f-default-rtdb.firebaseio.com",
  projectId: "personal-portfolio-9313f",
  storageBucket: "personal-portfolio-9313f.appspot.com",
  messagingSenderId: "50741387276",
  appId: "1:50741387276:web:3daa463fdd54e2d8428e29",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();

export { app, firestore, storage, auth };
