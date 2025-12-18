import { Link } from "react-router-dom";
import Header from "./Header.component";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/Validations.utils";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handerButtonClick = () => {
    const message = checkValidData(
      isSignInForm ? "" : name.current?.value,
      email.current.value,
      password.current.value,
      isSignInForm //passing as props to use in checkvalidData function
    );
    setErrorMessage(message);
  };

  return (
    <div className="">
      <Header />

      <div className="absolute">
        <img
          /* className={`absolute inset-0 w-full h-full object-cover
           transition-transform duration-700 ease-out
            ${showLogin ? "scale-150" : "scale-100"}`} */
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg"
          alt="background"
        />
      </div>

      <div className="bg-black/80 absolute flex items-center text-center justify-center my-28 mx-auto left-0 right-0 w-4/12 text-white rounded-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-5 p-10"
        >
          <h2 className="font-bold text-4xl text-start mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
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
            onClick={handerButtonClick}
            className="w-full bg-red-600 p-1.5 font-bold rounded-sm cursor-pointer"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {isSignInForm && (
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
