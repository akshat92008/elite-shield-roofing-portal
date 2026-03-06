import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Using the same config as Amaura Studio for unified backend
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyATBciTlka3kV87n3y_9HdBmOoX2lKwQJc",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "windore-crm.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "windore-crm",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "windore-crm.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "206691314107",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:206691314107:web:dbd25acc2f87353b25bc9e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
