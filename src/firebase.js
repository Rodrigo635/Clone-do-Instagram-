import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDIPUni_JUPYTYuTKROp4TRt9i1dh1ZuRA",
    authDomain: "instagram-clone-curso-3f87b.firebaseapp.com",
    projectId: "instagram-clone-curso-3f87b",
    storageBucket: "instagram-clone-curso-3f87b.appspot.com",
    messagingSenderId: "232823855450",
    appId: "1:232823855450:web:27b93eda3c95caf2ddbb63",
    measurementId: "G-TD5SKK27X8"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};