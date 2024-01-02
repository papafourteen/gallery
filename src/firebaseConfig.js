// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 export const firebaseConfig = {
  apiKey: "AIzaSyA93sx-8dcvZ8UvpcjXpstBYK2bsT0_NVc",
  authDomain: "portfolio-cfa60.firebaseapp.com",
  projectId: "portfolio-cfa60",
  storageBucket: "portfolio-cfa60.appspot.com",
  messagingSenderId: "172084483158",
  appId: "1:172084483158:web:11314859a4898070fdd7f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
export const provider= new GoogleAuthProvider();
export const db = getFirestore(app);
export const stor = getStorage(app);
