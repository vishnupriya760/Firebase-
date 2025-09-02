// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnylyMahid9GLFgzGmmrzy_H6LbkfMhjU",
  authDomain: "fir-90953.firebaseapp.com",
  projectId: "fir-90953",
  storageBucket: "fir-90953.firebasestorage.app",
  messagingSenderId: "103230996885",
  appId: "1:103230996885:web:912efbdd1118bf597bb69c",
  measurementId: "G-JVZ7QGL93X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app);
const provider = new GoogleAuthProvider();



export {auth,provider};