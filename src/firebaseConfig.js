// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/firestore";

const dotenv = require('dotenv');
dotenv.config();

const config = {
  apiKey: "AIzaSyCM4Xmqu1tZ6KXE3m_iNWfI2dL3jfF7MmY",
  authDomain: "workplace-manager-56eca.firebaseapp.com",
  databaseURL: "https://workplace-manager-56eca.firebaseio.com",
  projectId: "workplace-manager-56eca",
  storageBucket: "workplace-manager-56eca.appspot.com",
  messagingSenderId: "498635182739",
  appId: "1:498635182739:web:726cfcdbca1264a25a3366",
  measurementId: "G-C1XFNXRWRE"
};
firebase.initializeApp(config);

const db = firebase.firestore()

const testCollection = db.collection('test')

export {
    testCollection
}