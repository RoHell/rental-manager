import { initializeApp, firestore } from "firebase";

const settings = { timestampsInSnapshots: true };

const app = initializeApp({
  apiKey: "AIzaSyDDfAm1SeoJq5s7njLxgu99rPeprwOxgE8",
  authDomain: "rh-rental-manager.firebaseapp.com",
  databaseURL: "https://rh-rental-manager.firebaseio.com",
  projectId: "rh-rental-manager",
  storageBucket: "rh-rental-manager.appspot.com",
  messagingSenderId: "132376998456"
});

export const firestoreSettings = firestore().settings(settings);
export const db = app.database();
console.log("db", db.ref("rentals"));
export const rentalsRef = db.ref("rentals");
