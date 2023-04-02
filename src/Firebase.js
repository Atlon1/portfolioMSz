
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBxYqYzlE86Kb-4mq1AdRyRleSy65T_bA8",
    authDomain: "portfolio-kontakt-5c917.firebaseapp.com",
    projectId: "portfolio-kontakt-5c917",
    storageBucket: "portfolio-kontakt-5c917.appspot.com",
    messagingSenderId: "964726537609",
    appId: "1:964726537609:web:2a226dc6cc024e1a71b558",
    measurementId: "G-6VKFE2Y9LB"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};
