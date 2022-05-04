import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1ks1I2LqOHJ9DfIQiY1YGpDZ2M7mjl1Y",
    authDomain: "clone-525bf.firebaseapp.com",
    projectId: "clone-525bf",
    storageBucket: "clone-525bf.appspot.com",
    messagingSenderId: "1089195411658",
    appId: "1:1089195411658:web:60072aa0728fe582d10c33",
    measurementId: "G-B0J0S33RHY"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }