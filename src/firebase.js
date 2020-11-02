import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE6xImb9MKxVEKQserZnGUlLTIExAljEs",
  authDomain: "whatsapp-8136c.firebaseapp.com",
  databaseURL: "https://whatsapp-8136c.firebaseio.com",
  projectId: "whatsapp-8136c",
  storageBucket: "whatsapp-8136c.appspot.com",
  messagingSenderId: "432572739628",
  appId: "1:432572739628:web:3bb2f05ce8a1ccd02d2189",
  measurementId: "G-DQ0G6CSLL9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
