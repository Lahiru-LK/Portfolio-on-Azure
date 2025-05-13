import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASVYdXUdhB0ftPTYYDMSYI-0LEMua1eCQ",
  authDomain: "portfolio-lahiru.firebaseapp.com",
  projectId: "portfolio-lahiru",
  storageBucket: "portfolio-lahiru.firebasestorage.app",
  messagingSenderId: "326114378311",
  appId: "1:326114378311:web:84fc826cef798032cb6762",
  measurementId: "G-WL23X4Q3EG"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };



