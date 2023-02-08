import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {

  apiKey: "AIzaSyDLMYClbDvcI-P49adcBxcFMnxJUXNd7Lk",

  authDomain: "disney-plus-clone-93947.firebaseapp.com",

  projectId: "disney-plus-clone-93947",

  storageBucket: "disney-plus-clone-93947.appspot.com",

  messagingSenderId: "830991231072",

  appId: "1:830991231072:web:3fe69a952abaeddb877b05"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;