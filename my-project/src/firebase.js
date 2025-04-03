// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-aa4cb.firebaseapp.com",
  projectId: "realestate-aa4cb",
  storageBucket: "realestate-aa4cb.firebasestorage.app",
  messagingSenderId: "399053718974",
  appId: "1:399053718974:web:9876840a21c22bb37465ef",
  measurementId: "G-WRRRQ1Z7HT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);