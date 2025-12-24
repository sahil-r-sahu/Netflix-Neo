import { Link } from "react-router-dom";
import Header from "./Header.component";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/Validations.utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.utils";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.utils";
import { Bg_Url } from "../utils/constant.utils";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true); //Initially Sign In form will be displayed
  const [errorMessage, setErrorMessage] = useState(null);

  //Reference to name, email & password entered by the user in input boxes
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //Toggling Sign In/Up form
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  //This function will be called as soon as user clickes on Sign In/up button
  const handerButtonClick = () => {
    const message = checkValidData(
      isSignInForm ? "" : name.current?.value,
      email.current.value,
      password.current.value,
      isSignInForm //passing as props to use in checkvalidData function
    );
    setErrorMessage(message);

    if (message) return; //If there are no error message then proceed to Sign In/Up

    // Go to firebase documentation to get the code for sign In & sign Up  >>> https://firebase.google.com/docs/auth/web/password-auth?hl=en
    if (!isSignInForm) {
      //Sign Up form Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up >>> User goes to home page
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error?.message || "Something went wrong");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      //Sign In form Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in >>> user goes to home page
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />

      <div className="absolute">
        <img
          /* className={`absolute inset-0 w-full h-full object-cover
           transition-transform duration-700 ease-out
            ${showLogin ? "scale-150" : "scale-100"}`} */
          src={Bg_Url}
          alt="background"
        />
      </div>

      <div className="bg-black/80 absolute flex items-center text-center justify-center my-28 mx-auto left-0 right-0 w-4/12 text-white rounded-sm">
        <form
          //Preventing the default behaviour of browser to reload on submit button. So that we can validate the data entered by the user
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-5 p-10"
        >
          <h2 className="font-bold text-4xl text-start mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
            //This input box will only be shown on sign up page
            <input
              ref={name}
              className="p-2 border-2 rounded-sm"
              type="name"
              placeholder="Enter your full name"
              required
            />
          )}

          <input
            ref={email}
            className="p-2 border-2 rounded-sm"
            type="email"
            placeholder="Email OR mobile number"
            required
          />
          <input
            ref={password}
            className="p-2 border-2 rounded-sm"
            type="password"
            placeholder="Password"
            required
          />
          <p className="text-red-500 text-xs">{errorMessage}</p>
          <button
            type="submit"
            onClick={handerButtonClick} //Validating data before submiting the form
            className="w-full bg-red-600 p-1.5 font-bold rounded-sm cursor-pointer"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {isSignInForm && (
            //This will only be displayed on sign In form
            <div className="flex gap-3 flex-col">
              <p>OR</p>

              <button className=" w-full bg-gray-700/60 p-1.5 font-bold rounded-sm cursor-pointer">
                Use a Sign-in-code
              </button>

              <Link className="underline">Forgot password?</Link>
            </div>
          )}

          <div className="flex gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="accent-white"
              required
            />
            <label htmlFor="checkbox">Remember me</label>
          </div>

          <p onClick={toggleSignInForm} className="text-start cursor-pointer">
            {isSignInForm
              ? "New to Netflix?Sign up now"
              : "Existing User?Sign In now"}
          </p>

          <div className="text-start text-sm">
            <p className=" text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <Link className="underline text-blue-500">Learn more</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
