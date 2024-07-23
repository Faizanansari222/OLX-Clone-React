import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavigateFunction } from "react-router-dom";

// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDgQe445noD2kziYuKpqhFnlpyHJBr4faE",
  authDomain: "new-olx-ff036.firebaseapp.com",
  projectId: "new-olx-ff036",
  storageBucket: "new-olx-ff036.appspot.com",
  messagingSenderId: "708242915377",
  appId: "1:708242915377:web:fb737ff076acf27af11510",
  measurementId: "G-4419QP6BZ5",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginFun = (email: any, password: any) => {
  return signInWithEmailAndPassword(auth, email, password)
    
};

// const analytics = getAnalytics(app);

export const regisFun = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
   
};
