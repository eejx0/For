import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqiA7zHTepOFU3g83-utwUopujFhJYonY",
  authDomain: "foru-e6bb4.firebaseapp.com",
  projectId: "foru-e6bb4",
  storageBucket: "foru-e6bb4.firebasestorage.app",
  messagingSenderId: "301503269405",
  appId: "1:301503269405:web:5ef2ed679a8b596d4794f4",
  measurementId: "G-PB02R6RZZ7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);