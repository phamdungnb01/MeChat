import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDn17oJ8PAUssb1tQBPD4QTqTD17pX9F5U",
  authDomain: "mechat-4d9a2.firebaseapp.com",
  projectId: "mechat-4d9a2",
  storageBucket: "mechat-4d9a2.appspot.com",
  messagingSenderId: "217385081732",
  appId: "1:217385081732:web:c43a5f697ee3c0f45c5bd1",
  measurementId: "G-4FEFLTDLPY"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app;