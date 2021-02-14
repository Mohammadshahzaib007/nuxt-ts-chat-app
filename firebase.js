import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { store } from './store';

const firebaseConfig = {
  apiKey: 'AIzaSyBU7R16TIp-tkh5Bih86j9oNZc6MdOrJl4',
  authDomain: 'nuxt-ts-chat-app.firebaseapp.com',
  projectId: 'nuxt-ts-chat-app',
  storageBucket: 'nuxt-ts-chat-app.appspot.com',
  messagingSenderId: '24911567334',
  appId: '1:24911567334:web:cb593ae5f305b1c241de27'
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// window.addEventListener('load', () => {
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    console.log('form firbase file:  User ' + user.uid + ' is logged in with ' + user);
  } else {
    console.log('from firebase file: User is logged out');
  }
});
// });

export default firebaseApp;
