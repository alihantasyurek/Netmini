import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice.js";
import { LOGO } from "../utils/constants.js";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };

  useEffect(() => {
    // call it only once and not everytime the component re-renders
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-50 px-8 py-2 bg-linear-to-b from-black w-screen flex justify-between items-center">
      <img
        className="w-44"
        alt="logo"
        src={LOGO}
      />
      {user &&
        (
          <div className="flex gap-3">
            <img
              className="w-12 h-12"
              src={user?.photoURL}
              alt="user-icon"
            />
            <button
              onClick={handleSignOut}
              className="font-bold text-white cursor-pointer"
              type="button"
            >
              (Sign out)
            </button>
          </div>
        )}
    </div>
  );
};

export default Header;
