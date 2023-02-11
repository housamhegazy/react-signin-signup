// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQBx0j3UDovvNAD6Px8dWgwnvfs-_ywcU",
  authDomain: "signin-and-signup-auth-8f0dd.firebaseapp.com",
  projectId: "signin-and-signup-auth-8f0dd",
  storageBucket: "signin-and-signup-auth-8f0dd.appspot.com",
  messagingSenderId: "1013427674994",
  appId: "1:1013427674994:web:516d361bc4cc9d958707eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

