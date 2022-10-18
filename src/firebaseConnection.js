import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyADc3GV7G5nNInHOH5eZd9jkSf-t6a9CRM",
    authDomain: "dindin-8251b.firebaseapp.com",
    projectId: "dindin-8251b",
    storageBucket: "dindin-8251b.appspot.com",
    messagingSenderId: "1037788313696",
    appId: "1:1037788313696:web:11e1214eeb40a744442b05",
    measurementId: "G-SQM9KRJZT9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;


