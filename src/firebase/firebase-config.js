import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCcHtGSNgqy624yJHxm4QBVMAP93fHF-us",
    authDomain: "react-app-cursos-27c23.firebaseapp.com",
    projectId: "react-app-cursos-27c23",
    storageBucket: "react-app-cursos-27c23.appspot.com",
    messagingSenderId: "841461271493",
    appId: "1:841461271493:web:6ebc5f765f9bad391e19ac"
};
 
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}