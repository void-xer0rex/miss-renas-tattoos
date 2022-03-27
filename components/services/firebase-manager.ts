// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6o48NlwcgvE_uXxrtpzD7BnHQGmVCsng",
  authDomain: "renas-parlor.firebaseapp.com",
  projectId: "renas-parlor",
  storageBucket: "renas-parlor.appspot.com",
  messagingSenderId: "963194439841",
  appId: "1:963194439841:web:aa977d3c9008b2232988e0",
  measurementId: "G-0TCJE7TFE0"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;