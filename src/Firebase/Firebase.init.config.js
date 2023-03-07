// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnf6lSgqlyQz0BXVwdWhj7C-cB9G3-hwU",
  authDomain: "paradise-palms-tourist-h-c7621.firebaseapp.com",
  projectId: "paradise-palms-tourist-h-c7621",
  storageBucket: "paradise-palms-tourist-h-c7621.appspot.com",
  messagingSenderId: "276137689840",
  appId: "1:276137689840:web:023c1c0c4a7bad9f747835",
  measurementId: "G-DYMLJHLNCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth;