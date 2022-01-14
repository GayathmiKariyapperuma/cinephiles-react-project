import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from "./App";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUmgGI0la1SlgEZY-bE3TiRvotq-1bNXo",
  authDomain: "cinephiles-react-project.firebaseapp.com",
  projectId: "cinephiles-react-project",
  storageBucket: "cinephiles-react-project.appspot.com",
  messagingSenderId: "538162429481",
  appId: "1:538162429481:web:4e2e2e70ec5356b624e638",
  measurementId: "G-ZBSNKKH92X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
