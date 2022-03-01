import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC2qEboFMcxqgjLjjUt41vDQrBdWAC3zlI",
  authDomain: "online-sergi-app.firebaseapp.com",
  projectId: "online-sergi-app",
  storageBucket: "online-sergi-app.appspot.com",
  messagingSenderId: "748540347436",
  appId: "1:748540347436:web:a4acbbed0f426c79ec3d89",
  measurementId: "G-D8JT53D4K5"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const firestoreRef = firebase.firestore()
const authRef = firebase.auth()
const storageRef = firebase.storage()

// timestamp
const tarih = firebase.firestore.FieldValue.serverTimestamp

export { firebase,firestoreRef, authRef,storageRef, tarih }