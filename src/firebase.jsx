//Este codigo nos lo otorga la pagina de FireBAse

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-0smbQmmO3WHhFkr6DGH7MBRM7NTeiqc",
  authDomain: "fir-login-react-4e3b9.firebaseapp.com",
  projectId: "fir-login-react-4e3b9",
  storageBucket: "fir-login-react-4e3b9.appspot.com",
  messagingSenderId: "359928849388",
  appId: "1:359928849388:web:cf0a2126b7268a2746d6c9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
