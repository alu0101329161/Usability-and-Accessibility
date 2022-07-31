
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBm1MbDMCo-sx0LFX9LpadcRkyAtcscKR4",
  authDomain: "proyecto-web-uya-4b07e.firebaseapp.com",
  projectId: "proyecto-web-uya-4b07e",
  storageBucket: "proyecto-web-uya-4b07e.appspot.com",
  messagingSenderId: "458414668996",
  appId: "1:458414668996:web:d70f4810512592d6171d91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const saveUserData = (name, surname, email, year, location) => {
  console.log(name, surname, email, year, location);
  if(validacionTexto() & validacionEmail()) {
  addDoc(collection(db, 'users'), {
    name: name,
    surname: surname,
    email: email,
    date_birth: year,
    place_birth: location
  });
  } else {
    console.log("Datos erroneos Solicitud denegada")  
  }
}

export const getUsers = () => getDocs(collection(db, 'users'))

export const onGetUsers = (callback) => onSnapshot(collection(db, 'users'), callback)