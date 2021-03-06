import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import config from "../firebase.config";

firebase.initializeApp(config);

// Auth
export const auth = firebase.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();

// Firestore
export const firestore = firebase.firestore();
