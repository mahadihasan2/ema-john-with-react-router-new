// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZk2wgsNtHnJDVfV9XJ2wfnOGlTCVh0mE",
    authDomain: "ema-john-with-router-aut-bdbe8.firebaseapp.com",
    projectId: "ema-john-with-router-aut-bdbe8",
    storageBucket: "ema-john-with-router-aut-bdbe8.appspot.com",
    messagingSenderId: "421733500900",
    appId: "1:421733500900:web:86ff963e923f07b2a969f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;