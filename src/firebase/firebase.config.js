// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQfSrlbrX93lzHGNGbVN6ztkShOcZP1mI",
  authDomain: "ema-john-with-firebase-a-f74d8.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-f74d8",
  storageBucket: "ema-john-with-firebase-a-f74d8.appspot.com",
  messagingSenderId: "875708760263",
  appId: "1:875708760263:web:a47b52c7cf7cad33c4fee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;