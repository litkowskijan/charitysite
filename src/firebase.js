// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL2uRoUg8SRAzblN1hFA7_pl__1q78JPQ",
  authDomain: "charity-site-3a136.firebaseapp.com",
  projectId: "charity-site-3a136",
  storageBucket: "charity-site-3a136.appspot.com",
  messagingSenderId: "998409123248",
  appId: "1:998409123248:web:cfd767fdc26c330f94d275"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

