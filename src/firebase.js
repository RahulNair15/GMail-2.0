import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkGNyBS1FWjFH5BWxKy4VqtnvThZEEu7E",
  authDomain: "clone-a13ab.firebaseapp.com",
  projectId: "clone-a13ab",
  storageBucket: "clone-a13ab.appspot.com",
  messagingSenderId: "755241540747",
  appId: "1:755241540747:web:44f8f14f94f4d22adcc88e",
  measurementId: "G-PG5RBX01RV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();