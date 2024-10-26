const { initializeApp } = require("firebase/app");
const { getDatabase } = require('firebase/database'); 
const { getFirestore } = require('firebase/firestore'); 
const { getAuth } = require('firebase/auth'); 
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyBMw4UgTnNUqzF8UmVwBBmI3pK5GYbUQgo",
    authDomain: "simpleclass-d-2024max.firebaseapp.com",
    projectId: "simpleclass-d-2024max",
    storageBucket: "simpleclass-d-2024max.appspot.com",
    messagingSenderId: "960887051107",
    appId: "1:960887051107:web:f0ade8773b051fbe0f3956"
  };

const app = initializeApp(firebaseConfig);

const database = getDatabase(app); 
const firestore = getFirestore(app); 
const auth = getAuth(app);
const storage = getStorage(app); 

module.exports = { database, firestore, auth, storage };
