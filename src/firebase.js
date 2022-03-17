import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLJCKgQGZIDg8d0BrzjFHX_swdGVhfxSc",
  authDomain: "clone-b17a7.firebaseapp.com",
  projectId: "clone-b17a7",
  storageBucket: "clone-b17a7.appspot.com",
  messagingSenderId: "536828393704",
  appId: "1:536828393704:web:58b6b87426cda5dfb5b15d",
  measurementId: "G-J3CHL58JZE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };