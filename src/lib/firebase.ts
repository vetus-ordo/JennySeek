import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW5DUXXj3y9UwOZFU9Mjw6zYN8B-JRnWg",
  authDomain: "jenny-figma.firebaseapp.com",
  projectId: "jenny-figma",
  storageBucket: "jenny-figma.firebasestorage.app",
  messagingSenderId: "764134320183",
  appId: "1:764134320183:web:0ba36a8f857c0747aa37b2"
};

let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export { app }; // Export the initialized app
export const firestore = getFirestore(app);