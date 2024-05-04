// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.env.VITE.apiKey,
  // authDomain: import.meta.env.VITE.authDomain,
  // projectId:  import.meta.env.VITE.projectId,
  // storageBucket: import.meta.env.VITE.storageBucket,
  // messagingSenderId:  import.meta.env.VITE.messagingSenderId,
  // appId: import.meta.env.VITE.appId,
  // measurementId: import.meta.env.VITE.measurementId,
    apiKey: "AIzaSyAw9-QtRpLrnFtC6Flhg1VgkYxHMk6lpNs",
  authDomain: "bistro-boss-final-projec-55fef.firebaseapp.com",
  projectId: "bistro-boss-final-projec-55fef",
  storageBucket: "bistro-boss-final-projec-55fef.appspot.com",
  messagingSenderId: "450948417833",
  appId: "1:450948417833:web:2d41d91026638763d84f38",
  measurementId: "G-SH4EJFDN0D"
};

// Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);