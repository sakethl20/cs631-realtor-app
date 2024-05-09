import { getAuth } from "firebase/auth"; // Import Firebase Authentication module
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCMOUMJU2yNiH2Yv67HXCUOpbFnsDhsBA8",
    authDomain: "slad-realtors.firebaseapp.com",
    projectId: "slad-realtors",
    storageBucket: "slad-realtors.appspot.com",
    messagingSenderId: "773306574919",
    appId: "1:773306574919:web:49e5c9af8108e5e8192962",
    measurementId: "G-LWJBBSX3ZG" // Optional for Firebase JS SDK v7.20.0 and later
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication module

export { app, auth }; // Export both firebaseApp and auth objects

