import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPvl2VZ7t9k02EaIte0KFaWtHhWmJjr8w",
  authDomain: "auth-d9a0a.firebaseapp.com",
  projectId: "auth-d9a0a",
  storageBucket: "auth-d9a0a.appspot.com",
  messagingSenderId: "844779069337",
  appId: "1:844779069337:web:65e96f315041b201a7fd08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);