// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyABeN6TZD71xEpk_QxWIBmY7nJEBDpOZms",
//   authDomain: "almurut.firebaseapp.com",
//   projectId: "almurut",
//   storageBucket: "almurut.firebasestorage.app",
//   messagingSenderId: "724863970039",
//   appId: "1:724863970039:web:66f2dd9920cd8e862fc1f2",
//   measurementId: "G-H82N6WVFER"
// };

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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db,storage}

