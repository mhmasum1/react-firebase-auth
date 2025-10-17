// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPRv8ZCGxK8t8KTaywDzYtsCGWbOc0AY8",
    authDomain: "react-firebase-auth-53232.firebaseapp.com",
    projectId: "react-firebase-auth-53232",
    storageBucket: "react-firebase-auth-53232.firebasestorage.app",
    messagingSenderId: "483057870361",
    appId: "1:483057870361:web:20f25517fd2b0befc7ac88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);