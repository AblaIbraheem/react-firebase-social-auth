// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcX2JjTevV1Xjltngis-_TUbi0p0tc9PM",
  authDomain: "niledrgaonnfts.firebaseapp.com",
  projectId: "niledrgaonnfts",
  storageBucket: "niledrgaonnfts.appspot.com",
  messagingSenderId: "1034116875975",
  appId: "1:1034116875975:web:d3d540032d360b09e3a0e2",
  measurementId: "G-VDNZEJ4BLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)