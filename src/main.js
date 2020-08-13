import { createApp } from "vue";
import firebase from "firebase";
import App from "./App.vue";

const firebaseConfig = {
    apiKey:  process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
};

createApp(App).mount("#app");
