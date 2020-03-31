import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC4ApLOXvmD1YwY3in-Ox7V58F2rZrTwrg",
  authDomain: "crwn-db-7f4fd.firebaseapp.com",
  databaseURL: "https://crwn-db-7f4fd.firebaseio.com",
  projectId: "crwn-db-7f4fd",
  storageBucket: "crwn-db-7f4fd.appspot.com",
  messagingSenderId: "911815555682",
  appId: "1:911815555682:web:01905f0b91e0d807e26f3b",
  measurementId: "G-VGFBQ7RWGF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
  //   console.log("snapShot is ", snapShot);
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
