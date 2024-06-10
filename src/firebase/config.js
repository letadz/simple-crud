// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiqpW-2SFzJF74sYSur31eZIumIUQZhJ8",
  authDomain: "utak-firebase-crud.firebaseapp.com",
  projectId: "utak-firebase-crud",
  storageBucket: "utak-firebase-crud.appspot.com",
  messagingSenderId: "736707447154",
  appId: "1:736707447154:web:ff4753334db662e24835eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
