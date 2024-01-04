import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAcwmtohQ9WjQ0dx1tY4n-zDBDpIcKqlg",
    authDomain: "react-lab4-7b797.firebaseapp.com",
    projectId: "react-lab4-7b797",
    storageBucket: "react-lab4-7b797.appspot.com",
    messagingSenderId: "174797141503",
    appId: "1:174797141503:web:8df76e8c877a9f74fbe3ca",
    measurementId: "G-K80V87LDZX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  