
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
  import { getFirestore } from "firebase/firestore";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyApudGV2r-x7cv29r6lv9Od4v079OlMsCw",
    authDomain: "doridori-3bfb0.firebaseapp.com",
    projectId: "doridori-3bfb0",
    storageBucket: "doridori-3bfb0.appspot.com",
    messagingSenderId: "117705198521",
    appId: "1:117705198521:web:ffd7ecc7fd6d5b1a7c8468",
    measurementId: "G-7GKKTCCTGR"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//   const db = getFirestore(app);
export const db = getFirestore();