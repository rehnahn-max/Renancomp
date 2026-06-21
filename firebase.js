import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZ5TDRCIUVFc06Y4xWoBz77dkHWGxkO4",
  authDomain: "renan-tech-premium.firebaseapp.com",
  projectId: "renan-tech-premium",
  storageBucket: "renan-tech-premium.firebasestorage.app",
  messagingSenderId: "145172035353",
  appId: "1:145172035353:web:828bd6e783259e87dc3788",
  measurementId: "G-SEMG4PPKVR"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db };