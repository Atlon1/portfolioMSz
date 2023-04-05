
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA0mSlRfPufn5lrMv7L-NgsYZA-RU2F1KQ",
    authDomain: "portfolio-contact-6f4a6.firebaseapp.com",
    projectId: "portfolio-contact-6f4a6",
    storageBucket: "portfolio-contact-6f4a6.appspot.com",
    messagingSenderId: "863373110766",
    appId: "1:863373110766:web:15dd4692356e592f6a72ff",
    measurementId: "G-4YHX3F9T67"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};
