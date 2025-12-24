import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADhVrzRw4jNPrmRojdu7rwFf4aGGQtPjw",
  authDomain: "techtrnoix2026.firebaseapp.com",
  projectId: "techtrnoix2026",
  storageBucket: "techtrnoix2026.firebasestorage.app",
  messagingSenderId: "579433363170",
  appId: "1:579433363170:web:1a2d5f80a5dfd474be50bb",
  measurementId: "G-9W1PF1TJ8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Add this line for authentication
const db = getDatabase(app);

export { app, auth, db as database };
