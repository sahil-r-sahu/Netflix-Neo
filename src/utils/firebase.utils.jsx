// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSDca5IOlxWR-FZcSzlFlbrBGwFupZspc",
  authDomain: "netflix-neo.firebaseapp.com",
  projectId: "netflix-neo",
  storageBucket: "netflix-neo.firebasestorage.app",
  messagingSenderId: "815758138274",
  appId: "1:815758138274:web:d14c68c9362623116eb0fb",
  measurementId: "G-22TEY3ZTVY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
