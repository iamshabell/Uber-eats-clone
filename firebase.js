import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkD2usJW4P8aMloMquFNq1l4ecemthOFI",
    authDomain: "dhaweeye-eats.firebaseapp.com",
    projectId: "dhaweeye-eats",
    storageBucket: "dhaweeye-eats.appspot.com",
    messagingSenderId: "602758243826",
    appId: "1:602758243826:web:7253f7281ad93b9bc4776b",
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;