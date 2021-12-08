// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXFsqyBosDGRAQviaZvKkuVIi2x24A2wk",
  authDomain: "fgc-site-c507e.firebaseapp.com",
  projectId: "fgc-site-c507e",
  storageBucket: "fgc-site-c507e.appspot.com",
  messagingSenderId: "407582000467",
  appId: "1:407582000467:web:fe5393fa03e85e0fc24da6",
  // measurementId: "${config.measurementId}"
};

// Initialize Firebase
export const firebase =  initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);