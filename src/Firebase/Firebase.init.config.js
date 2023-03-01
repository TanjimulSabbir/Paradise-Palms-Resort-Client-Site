// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZBYdkeErKl1DnXBohc3MeFikF_ObvyRw",
  authDomain: "assignmentandprojects-fb0df.firebaseapp.com",
  projectId: "assignmentandprojects-fb0df",
  storageBucket: "assignmentandprojects-fb0df.appspot.com",
  messagingSenderId: "811193392230",
  appId: "1:811193392230:web:a4706c03d99529e9b521a7",
  measurementId: "G-MPVEVRYM7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth();

export default auth;