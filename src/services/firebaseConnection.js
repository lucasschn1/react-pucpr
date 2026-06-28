// src/services/firebaseConnection.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCuM4BE6SVktJfq7eC8v3UKHxcogak-jE",
  authDomain: "sistema-login-pucpr.firebaseapp.com",
  projectId: "sistema-login-pucpr",
  storageBucket: "sistema-login-pucpr.firebasestorage.app",
  messagingSenderId: "313797898950",
  appId: "1:313797898950:web:1e4e9ac8b4a931ee991dc7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };