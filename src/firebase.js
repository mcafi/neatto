// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHEY1AGEFvUPykV8CHS9cSMXU5Xlo0JHg",
  authDomain: "neatto-bba44.firebaseapp.com",
  projectId: "neatto-bba44",
  storageBucket: "neatto-bba44.appspot.com",
  messagingSenderId: "849405726361",
  appId: "1:849405726361:web:8a033d3e61c4e4501cf208",
  measurementId: "G-9V936BEP78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

export const firestore = getFirestore(app);