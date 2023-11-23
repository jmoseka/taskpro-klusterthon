// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW98SIUyl1za9YHDCRaNvkGOoABmfXQ14",
  authDomain: "image-dnd.firebaseapp.com",
  projectId: "image-dnd",
  storageBucket: "image-dnd.appspot.com",
  messagingSenderId: "771743800787",
  appId: "1:771743800787:web:932405c07f443fda946326",
  measurementId: "G-DFKLFQ83ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);