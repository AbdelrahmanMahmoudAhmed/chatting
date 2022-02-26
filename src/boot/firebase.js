// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxsrziLthuiV5sGFIj4dioq19L2xTxle4",
  authDomain: "chat-app-4bf29.firebaseapp.com",
  projectId: "chat-app-4bf29",
  storageBucket: "chat-app-4bf29.appspot.com",
  messagingSenderId: "466520779829",
  appId: "1:466520779829:web:696cd68207dccf24c4957c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)
const firebaseDb = getDatabase(firebaseApp)

export { firebaseAuth, firebaseDb }