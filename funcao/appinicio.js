// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYaZOIhV1XXFssVJU80bXQZTPMwcahpDY",
  authDomain: "rifapro-3a104.firebaseapp.com",
  projectId: "rifapro-3a104",
  storageBucket: "rifapro-3a104.appspot.com",
  messagingSenderId: "850484027467",
  appId: "1:850484027467:web:fdbea47c862b97d7766dce",
  measurementId: "G-36XN98FGW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);