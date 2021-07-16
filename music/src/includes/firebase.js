import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3WlsCAzlRURuGMS02kVyGps2VEFLjqU8',
  authDomain: 'music-5678a.firebaseapp.com',
  projectId: 'music-5678a',
  storageBucket: 'music-5678a.appspot.com',
  // messagingSenderId: '693362851433',
  appId: '1:693362851433:web:a77eae1242c57b40ca2cf8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const userCollection = db.collection('users');

export { auth, db, userCollection };
