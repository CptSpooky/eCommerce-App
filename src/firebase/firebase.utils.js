import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCudHgv89YME44pEQfJ8O2AvZOfH6GJOn0",
  authDomain: "ecommerce-demo-d660d.firebaseapp.com",
  projectId: "ecommerce-demo-d660d",
  storageBucket: "ecommerce-demo-d660d.appspot.com",
  messagingSenderId: "131181320714",
  appId: "1:131181320714:web:6fad27c83a5e1318a69df3",
  measurementId: "G-MN6MPWTEZ3"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //create a new user if there isnt one
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;