// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJdmmpcIFcykuveZQ7V9BTzGunCfiFkxI",
  authDomain: "challenge-c2893.firebaseapp.com",
  projectId: "challenge-c2893",
  storageBucket: "challenge-c2893.appspot.com",
  messagingSenderId: "329127633918",
  appId: "1:329127633918:web:662da2685e4af4b45cd6af",
  measurementId: "G-1F8F3LCEZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
