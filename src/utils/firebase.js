// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzb4T1vfgYD7BtaSiJscj7-FbG6DfvDp8",
  authDomain: "netflix-gpt-58329.firebaseapp.com",
  projectId: "netflix-gpt-58329",
  storageBucket: "netflix-gpt-58329.appspot.com",
  messagingSenderId: "658949491429",
  appId: "1:658949491429:web:8881587a0df92cd8f3a20c",
  measurementId: "G-X6DR6FY5F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();