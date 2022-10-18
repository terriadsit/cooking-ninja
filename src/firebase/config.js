import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCxwid_4_S4kk4x-lJW3zBb6YhAYJimUq8",
    authDomain: "cooking-ninja-site-56b6a.firebaseapp.com",
    projectId: "cooking-ninja-site-56b6a",
    storageBucket: "cooking-ninja-site-56b6a.appspot.com",
    messagingSenderId: "993672930955",
    appId: "1:993672930955:web:c626a8ff325ca6e7d4968e"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }