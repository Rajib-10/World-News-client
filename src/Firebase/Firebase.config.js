// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoiuSKAwiMJWsxUk1sC5VeUh9YAAZPdfg",
    authDomain: "world-news-30419.firebaseapp.com",
    projectId: "world-news-30419",
    storageBucket: "world-news-30419.appspot.com",
    messagingSenderId: "985587448193",
    appId: "1:985587448193:web:55a07583bcbc63172ed080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);