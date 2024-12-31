// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 匯入 firebase
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3VWA53Lb8FMfjlBsvz2s_Yz0TWp6aX-E",
  authDomain: "myproject-39975.firebaseapp.com",
  projectId: "myproject-39975",
  storageBucket: "myproject-39975.firebasestorage.app",
  messagingSenderId: "520783817447",
  appId: "1:520783817447:web:86e75cd53d23219c055042",
  measurementId: "G-VWD70F8CDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//匯出
export const auth=getAuth(app);
export const provide=new GoogleAuthProvider();