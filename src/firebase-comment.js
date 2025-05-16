import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASVYdXUdhB0ftPTYYDMSYI-0LEMua1eCQ",
  authDomain: "portfolio-lahiru.firebaseapp.com",
  projectId: "portfolio-lahiru",
  storageBucket: "portfolio-lahiru.firebasestorage.app",
  messagingSenderId: "326114378311",
  appId: "1:326114378311:web:84fc826cef798032cb6762",
  measurementId: "G-WL23X4Q3EG"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
