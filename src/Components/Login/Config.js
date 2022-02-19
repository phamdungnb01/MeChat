import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDPl7CYa0Amucg2_NyDaCbZ8FJVfmLldrk",
  authDomain: "chatapp-e81dd.firebaseapp.com",
  projectId: "chatapp-e81dd",
  storageBucket: "chatapp-e81dd.appspot.com",
  messagingSenderId: "100832733532",
  appId: "1:100832733532:web:9377a2ff245d6cfb1c7999",
  measurementId: "G-FZHB7G9YSG"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app;