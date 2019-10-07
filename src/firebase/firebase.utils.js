import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCUPNpzGdfJ8yOQZDyV-Gw9B-eq4lF6zCY",
  authDomain: "crwn-db-3a614.firebaseapp.com",
  databaseURL: "https://crwn-db-3a614.firebaseio.com",
  projectId: "crwn-db-3a614",
  storageBucket: "",
  messagingSenderId: "842903264757",
  appId: "1:842903264757:web:1252940b3049ef975e54bc",
  measurementId: "G-Q9BTQ43S22"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
