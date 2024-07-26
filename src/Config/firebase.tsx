import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export const loginFun = (email: any, password: any) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const regisFun = async (
  email: string,
  name: string,
  password: string
) => {
  await createUserWithEmailAndPassword(auth, email, password);

  return addDoc(collection(db, "users"), { email, name });
};

export const addProduct = async (productInfo: any) => {
  const { title, price, date, description, image } = productInfo;

  const storageRef = ref(storage, "images/" + image.name);

  await uploadBytes(storageRef, image);

  const url = await getDownloadURL(storageRef);

  return addDoc(collection(db, "ProductDetail"), {title, price, date, description, image: url});

  // console.log(title,price, provence, date, description, image: url );
  
};


export const getData = async (nodename: any) => {
const products:any = [];
  const querySnapshot = await getDocs(collection(db, 'ProductDetail'));

  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });

  return products;
};

export {onAuthStateChanged, auth}