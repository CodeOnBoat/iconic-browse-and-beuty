import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYz9-zZy4p65KWaMR6rQrdWgLr0uK1PJU",
  authDomain: "iconic-2c1d7.firebaseapp.com",
  projectId: "iconic-2c1d7",
  storageBucket: "iconic-2c1d7.appspot.com",
  messagingSenderId: "730867140711",
  appId: "1:730867140711:web:209315ac3fe7043ab1ecc2",
  measurementId: "G-P5S28N7X4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
