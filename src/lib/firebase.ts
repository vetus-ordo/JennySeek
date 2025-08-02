// /lib/firebase.ts

// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW5DUXXj3y9UwOZFU9Mjw6zYN8B-JRnWg",
  authDomain: "jenny-figma.firebaseapp.com",
  projectId: "jenny-figma",
  storageBucket: "jenny-figma.firebasestorage.app",
  messagingSenderId: "764134320183",
  appId: "1:764134320183:web:0ba36a8f857c0747aa37b2"
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Export the firestore instance for use in other parts of your app
export const firestore = getFirestore(app);

/**
 * Saves a student's quiz results to Firestore.
 * This creates a new document in the "reportCards" collection.
 * @param studentName - The name of the student (e.g., "Jenny").
 * @param assignmentTitle - The title of the assignment completed.
 * @param answers - An object mapping question IDs to the index of the selected answer.
 */
export const saveReportCard = async (studentName: string, assignmentTitle: string, answers: Record<string, number>) => {
  // Ensure we have the necessary data before trying to save
  if (!studentName || !assignmentTitle) {
    console.error("Missing student name or assignment title. Cannot save report card.");
    return;
  }
  
  try {
    // Create a unique document ID using the student's name and the current timestamp
    const reportCardRef = doc(firestore, "reportCards", `${studentName}_${Date.now()}`);
    
    // Set the data for the document
    await setDoc(reportCardRef, {
      studentName,
      assignmentTitle,
      answers,
      submittedAt: new Date(),
    });
    
    console.log("Report card successfully saved to Firestore!");
  } catch (error) {
    console.error("Error saving report card: ", error);
  }
};
