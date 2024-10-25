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
  getDoc,
  doc,
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

// export const addProduct = async (productInfo: any) => {
//   const { title, price, date, description, image } = productInfo;

// 

//   return addDoc(collection(db, "ProductDetail"), {
//     title,
//     price,
//     date,
//     description,
//     image: url,
//   });

//   // console.log(title,price, provence, date, description, image: url );
// };

// export const getData = async () => {
// await fetch('http://localhost:4009/')

  // const querySnapshot = await getDocs(collection(db, "ProductDetail"));
  // const products: any = [];

  // querySnapshot.forEach((doc) => {
  //   const data = doc.data();
  //   data.id = doc.id;
  //   products.push(data);
  // });

  // return products;
// };

// export const getSingleProduct = async (id: any) => {
//   const docRef = doc(db, "ProductDetail", id);
//   const docSnap = await getDoc(docRef);
//   // const data= []

//   if (docSnap.exists()) {
//     // console.log("Document data:", docSnap.data());
//     const product = docSnap.data();
//     // data.push(product)
//     return docSnap.data();
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
//   }
//   // console.log(data);
// };




//MongoDB database
export const addProduct = async (props: any) => {
  const { title, price, province, date, description, image } = props;
  const storageRef = ref(storage, "images/" + image.name);

  await uploadBytes(storageRef, image);
  
    const url = await getDownloadURL(storageRef);
    const productData = {
    title,
    price,
    province,
    description,
    image: url,
  };
  // console.log(productData);
  try {
    const response = await fetch("http://localhost:4009/olx/api/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( productData ),
    });
    // console.log(response);
  } catch (err: any) {
    console.log(err.message);
  }
};

export { onAuthStateChanged, auth };