import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDbZxUdkMGt1kbwUOpu5iLh6YiGoRLijVQ",
    authDomain: "treinamentos-glofc.firebaseapp.com",
    projectId: "treinamentos-glofc",
    storageBucket: "treinamentos-glofc.appspot.com",
    messagingSenderId: "22115231281",
    appId: "1:22115231281:web:56f6977ef30c720543d710"
  };
  
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);