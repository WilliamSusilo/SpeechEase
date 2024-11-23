const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const admin = require('firebase-admin');

const firebaseConfig = {
  apiKey: "AIzaSyBcpwf11y017vYO--lkEun2-gwY9JprHFA",
  authDomain: "speechease-iw10810.firebaseapp.com",
  projectId: "speechease-iw10810",
  storageBucket: "speechease-iw10810.firebasestorage.app",
  messagingSenderId: "950424434728",
  appId: "1:950424434728:web:aa2452f2bbc439a4969d1d",
  measurementId: "G-7Y6TTN3674"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json"); 
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
  });
}

module.exports = { db, admin };