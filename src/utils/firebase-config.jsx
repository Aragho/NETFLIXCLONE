
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBMb6IODvsne258dpmC5wS4dSmHgErCj5g",
  authDomain: "react-netflix-2d089.firebaseapp.com",
  projectId: "react-netflix-2d089",
  storageBucket: "react-netflix-2d089.firebasestorage.app",
  messagingSenderId: "873669351475",
  appId: "1:873669351475:web:c206446eebed2cc449eb46",
  measurementId: "G-W5744CQPQX"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);