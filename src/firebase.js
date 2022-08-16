import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqXsF3DvvXzejKSdS06izG39OIQ36MxUo",
  authDomain: "crudproject-cb302.firebaseapp.com",
  projectId: "crudproject-cb302",
  storageBucket: "crudproject-cb302.appspot.com",
  messagingSenderId: "974976952182",
  appId: "1:974976952182:web:74595eccb06262e877fc57",
  measurementId: "G-ELG92JRGV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}