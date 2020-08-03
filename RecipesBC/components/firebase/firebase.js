import * as firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCz0ko0uiR6HOCEHdo-C8hoyCMrVvpwwIM",
    authDomain: "recetas-api.firebaseapp.com",
    databaseURL: "https://recetas-api.firebaseio.com",
    projectId: "recetas-api",
    storageBucket: "recetas-api.appspot.com",
    messagingSenderId: "621355007397",
    appId: "1:621355007397:web:2c346719a9fd508b4cbc4c",
    measurementId: "G-BNJ9Q9WNXX"
  };
export default firebase.initializeApp(firebaseConfig);