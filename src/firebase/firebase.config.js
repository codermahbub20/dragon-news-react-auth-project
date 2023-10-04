// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5AyInhMrjQmOvRh78JDP0LJb7stxPtT8",
  authDomain: "dragon-news-auth-633eb.firebaseapp.com",
  projectId: "dragon-news-auth-633eb",
  storageBucket: "dragon-news-auth-633eb.appspot.com",
  messagingSenderId: "465975081542",
  appId: "1:465975081542:web:c6d8217c0a896fa618e847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;