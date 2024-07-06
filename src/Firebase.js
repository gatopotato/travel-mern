// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9f2ca.firebaseapp.com",
  projectId: "mern-blog-9f2ca",
  storageBucket: "mern-blog-9f2ca.appspot.com",
  messagingSenderId: "973204319089",
  appId: "1:973204319089:web:6128e72b65238f7fc664d0",
  measurementId: "G-PF15QQHBCQ"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);