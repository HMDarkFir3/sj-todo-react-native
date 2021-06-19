//Firebase
import firebase from "firebase/app";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyBbxYY_u7J7wBjrAtlzUFjhRoeR-zH-bvk",
  authDomain: "todolist-be1a0.firebaseapp.com",
  projectId: "todolist-be1a0",
  storageBucket: "todolist-be1a0.appspot.com",
  messagingSenderId: "345186770321",
  appId: "1:345186770321:web:da965c20cd13addd600e30",
  measurementId: "G-FN13SQSWXJ",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
