
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-b3hqCd49RVll3n1n_qaVYDIfqAQSZtI",
  authDomain: "kgs-land-improvements-debb5.firebaseapp.com",
  projectId: "kgs-land-improvements-debb5",
  storageBucket: "kgs-land-improvements-debb5.firebasestorage.app",
  messagingSenderId: "45623645866",
  appId: "1:45623645866:web:2fe8c82391d190194f22d3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// We'll add the review code after the HTML form is in place.
