import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Google from "../../img/google.png";
import { firebaseConfig } from "./Firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import Header from "../Header/Header";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email } = res.user;
        const newUser = { name: displayName, email: email };
        setLoggedInUser(newUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`Error Code: ${errorCode} Error Message: ${errorMessage}`);
      });
  };

  return (
    <div className="container">
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <button
          className="align-items-center"
          onClick={handleGoogleSignIn}
          style={{
            border: "0px",
            height: "50px",
            width: "250px",
            borderRadius: "10px",
          }}
        >
          <img
            src={Google}
            style={{ width: "30px", height: "30px", margin: "4px" }}
            alt=""
            srcset=""
          />
          Sign In Google
        </button>
      </div>
    </div>
  );
};

export default Login;
