import { initializeApp } from "firebase/app";
//for autentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//for db
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw5Iv0Ec6-9UjzaLsqAG4oI1IPsGoHALo",
  authDomain: "bugsharp-29467.firebaseapp.com",
  projectId: "bugsharp-29467",
  storageBucket: "bugsharp-29467.appspot.com",
  messagingSenderId: "982592640055",
  appId: "1:982592640055:web:2aa36fecc20142bc249bb2",
  measurementId: "G-K26C0HNJJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//for autentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
//for db
export const db = getFirestore(app);
export const storage = getStorage(app);
