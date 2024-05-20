import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCBBKOI-nPVhT2dLB0gjQ1XPtuDhLa2DYE",
    authDomain: "odp-309-react.firebaseapp.com",
    projectId: "odp-309-react",
    storageBucket: "odp-309-react.appspot.com",
    messagingSenderId: "771576979264",
    appId: "1:771576979264:web:73e0604166512d47b624a5",
    measurementId: "G-RGKF0WHPC6"
};

// Initialize Firebas
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {app, db,collection,addDoc, getDocs, doc, deleteDoc};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
