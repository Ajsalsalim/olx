import firebase from "firebase"
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjMmozNlovBfss-HmiPG64q8ECzfyvUoo",
    authDomain: "olx-project-d6b00.firebaseapp.com",
    projectId: "olx-project-d6b00",
    storageBucket: "olx-project-d6b00.appspot.com",
    messagingSenderId: "534542274236",
    appId: "1:534542274236:web:18b34099d6c5509086cab9",
    measurementId: "G-49QDXPQX9Z"
  };

  export default firebase.initializeApp(firebaseConfig)