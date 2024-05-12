// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG0glMmq6tX6SlrJoZ1tcs8aH4ujW0fWc",
  authDomain: "myfirstproject-8e01f.firebaseapp.com",
  projectId: "myfirstproject-8e01f",
  storageBucket: "myfirstproject-8e01f.appspot.com",
  messagingSenderId: "1012530837636",
  appId: "1:1012530837636:web:ea137d1b9576ac66cc2ad1",
  measurementId: "G-9HNJXVZPCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
const analytics = getAnalytics(app);