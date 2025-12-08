import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          alt="background-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/30c8b9f4-3db9-4b3b-a1ee-8fa56531b712/web/SE-en-20251201-TRIFECTA-perspective_10c476f8-8bd5-42cb-a7ce-bb0a5471ffd1_large.jpg"
        />
      </div>
      <form className="w-3/12 p-12 bg-black/80 text-white absolute my-36 mx-auto right-0 left-0 bg-opacity-90">
        <h1 className="font-bold text-3xl py-2">
          {isSignIn ? "Sign in" : "Sing up(Login)"}
        </h1>
        {isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[hsl(120,6%,7%)] text-[#b9b9b8] roudned-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[hsl(120,6%,7%)] text-[#b9b9b8] roudned-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[hsl(120,6%,7%)] text-[#b9b9b8] rounded-lg"
        />
        <button className="py-4 my-6 bg-[#c11119] w-full font-bold rounded-lg">
          Sign in
        </button>
        <p className="py-4 underline cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

const HocLogin = (Login) => {
  return (/*props*/) => {
    return (
      <div>
        <h1 className="w-7xl text-9xl text-red-700">HELLO FROM HOC</h1>
        <Login />
      </div>
    );
  };
  //hoc is a function that takes a component and returns a higher component
};
