// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1u4G8l94C_rgI8Fuf10wXsl1Nr4_b_88",
    authDomain: "noorify-dfbb6.firebaseapp.com",
    projectId: "noorify-dfbb6",
    storageBucket: "noorify-dfbb6.appspot.com",
    messagingSenderId: "979594782500",
    appId: "1:979594782500:web:0483ea5a6a323742e1f5b1",
    measurementId: "G-32KWQ28N78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const auth = getAuth();
const storage = getStorage();


export { auth, storage};