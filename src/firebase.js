
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCqMFByp592T-Ie0FnIL0r3rs5Zif77ko8",
  authDomain: "portfolio-website-3d0b3.firebaseapp.com",
  projectId: "portfolio-website-3d0b3",
  storageBucket: "portfolio-website-3d0b3.appspot.com",
  messagingSenderId: "350751006229",
  appId: "1:350751006229:web:ec740118153b079ad0b81c",
  measurementId: "G-WR4TGC8TCG"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);