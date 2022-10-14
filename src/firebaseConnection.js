import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyDT5rhqwSUPlWiKXYQHO0mg6n0JuH6G54Y",
    authDomain: "curso-b4a6c.firebaseapp.com",
    projectId: "curso-b4a6c",
    storageBucket: "curso-b4a6c.appspot.com",
    messagingSenderId: "487137022216",
    appId: "1:487137022216:web:25afdf961e8c87691c5cbd",
    measurementId: "G-B1Q3KX0CZ2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;


