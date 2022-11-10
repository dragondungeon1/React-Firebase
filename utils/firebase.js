// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGIN_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyA9yH1yf_AlFXP9KYkPmlxZUtWMZgreyx0",
    authDomain: "fullstack-react-9aebf.firebaseapp.com",
    projectId: "fullstack-react-9aebf",
    storageBucket: "fullstack-react-9aebf.appspot.com",
    messagingSenderId: "825004731300",
    appId: "1:825004731300:web:70f4421d45ecacde1eef31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);