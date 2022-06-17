import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDebkbTZ5NEmlyMSo-PbWCORJJ6WRXwa90",
  authDomain: "react-coder-ecommerce-5b24c.firebaseapp.com",
  projectId: "react-coder-ecommerce-5b24c",
  storageBucket: "react-coder-ecommerce-5b24c.appspot.com",
  messagingSenderId: "1063039634098",
  appId: "1:1063039634098:web:1ada6635f16b63f7c717ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);

export  default db;