import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAaHJCPJZUKoDARmphilr03SQ_h9-B2NEk",
    authDomain: "sbrooms-2b842.firebaseapp.com",
    projectId: "sbrooms-2b842",
    storageBucket: "sbrooms-2b842.appspot.com",
    messagingSenderId: "1078314107083",
    appId: "1:1078314107083:web:7f65d5664073230f665b4e",
    measurementId: "G-MF62F39G14"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const google_provider = new GoogleAuthProvider()
const facebook_provider = new FacebookAuthProvider()

export {auth, google_provider, facebook_provider}