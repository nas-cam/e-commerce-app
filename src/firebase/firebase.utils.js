import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config={
    apiKey: "AIzaSyD4vj8N_0tdTklpqNRUFbeKaPKV19aOy9g",
    authDomain: "e-commerce-db-10524.firebaseapp.com",
    projectId: "e-commerce-db-10524",
    storageBucket: "e-commerce-db-10524.appspot.com",
    messagingSenderId: "1017539346327",
    appId: "1:1017539346327:web:dd1d5ea057d7fa8f4f8ed2",
    measurementId: "G-SNGGV904WG"
  };

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();
  

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters ({prompt:"select_account"});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase; 