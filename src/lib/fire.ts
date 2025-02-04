// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKW7aW_LfabEAJOn5BztpgzzjjBPhUZd4",
  authDomain: "onlineshop-4f347.firebaseapp.com",
  projectId: "onlineshop-4f347",
  storageBucket: "onlineshop-4f347.appspot.com",
  messagingSenderId: "381030428987",
  appId: "1:381030428987:web:32f612af201c329128471e",
  measurementId: "G-LLDLWWVYGN"
};


// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db,storage}

