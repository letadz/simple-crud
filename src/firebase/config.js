// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHkZpfXP91iUCd41qvSn39uSAMcNwa66w",
  authDomain: "simple-crud-utak.firebaseapp.com",
  projectId: "simple-crud-utak",
  storageBucket: "simple-crud-utak.appspot.com",
  messagingSenderId: "1059793054224",
  appId: "1:1059793054224:web:20b016f6aec3ee2ab7b895",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
