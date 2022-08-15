import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnUrimjE6yrns1gLikeVXxvc8T-sh0AKw",
  authDomain: "final-year-project-auth-a0ef7.firebaseapp.com",
  projectId: "final-year-project-auth-a0ef7",
  storageBucket: "final-year-project-auth-a0ef7.appspot.com",
  messagingSenderId: "680002073900",
  appId: "1:680002073900:web:1ca40be37296f8e0c0a889"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;