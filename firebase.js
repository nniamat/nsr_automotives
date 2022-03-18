import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB2PezuynGExEFFr56bNjGZJXvJYlwP9rE",
  authDomain: "nsrwebsite-2944b.firebaseapp.com",
  projectId: "nsrwebsite-2944b",
  storageBucket: "nsrwebsite-2944b.appspot.com",
  messagingSenderId: "111843808846",
  appId: "1:111843808846:web:2c2cb4be71247d3c4d951f"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);