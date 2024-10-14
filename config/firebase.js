// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyAWPaObu34uM-Y9PHyTpjsUQzO8luaGJbQ",
  authDomain: "react-native-5efdd.firebaseapp.com",
  projectId: "react-native-5efdd",
  storageBucket: "react-native-5efdd.appspot.com",
  messagingSenderId: "181663945324",
  appId: "1:181663945324:web:14a9f7198df9244e1efe49",
  measurementId: "G-NEN8GR918V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);