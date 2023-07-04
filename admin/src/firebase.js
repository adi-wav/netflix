import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDY3-zZnIE_W8hvohRKzY2toNjKiqnTAkw",
    authDomain: "netflix-10b08.firebaseapp.com",
    projectId: "netflix-10b08",
    storageBucket: "netflix-10b08.appspot.com",
    messagingSenderId: "175139385156",
    appId: "1:175139385156:web:fbb879fdb567b82c6bf111",
    measurementId: "G-ZTVMLXSW91"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;