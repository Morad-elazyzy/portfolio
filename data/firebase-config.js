import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "portfolio-89bbc.firebaseapp.com",
  projectId: "portfolio-89bbc",
  storageBucket: "portfolio-89bbc.appspot.com",
  messagingSenderId: "718158078097",
  appId: "1:718158078097:web:02110b80f58c204d08df30",
  measurementId: "G-PWWHJ3TPHZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
