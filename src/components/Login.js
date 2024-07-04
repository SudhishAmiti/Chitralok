import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValid from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {updateProfile } from "firebase/auth";
import { BG_URL } from "../utils/constant";

const Login = () => {
  
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = (event) => {
    event.preventDefault();
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); 
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (event) => {
    event.preventDefault();
    const message = checkValid(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      console.log("Attempting to create a new user...");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log("User created:", user);
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            navigate("/browse")
            // ...
          }).catch((error) => {
            setErrorMessage(error);
          });
          navigate("/browse");
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`Error ${errorCode}: ${errorMessage}`);
          setErrorMessage(errorMessage);
        });
    } else {
      console.log("SignIn form submitted");
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`Error ${errorCode}: ${errorMessage}`);
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="Netflix"
        />
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-2xl p-2 my-2">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="bg-red-600 p-4 my-6 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        <button>
          <p className="py-4" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a user? Sign In now"}
          </p>
        </button>
      </form>
    </div>
  );
};

export default Login;
