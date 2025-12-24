import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice.utils";
import { LogoUrl } from "../utils/constant.utils";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    //Signing out the user >>> https://firebase.google.com/docs/auth/web/password-auth
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  //since header will be there in every component, doing Auth here
  useEffect(() => {
    //whenever the Auth state changes this will be called >>> https://firebase.google.com/docs/auth/web/manage-users?hl=en

    //Whenever sign in/out happens Auth state changes so we should navigate(route) the user fron here only

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        //adding data of user to the store
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out & removing his data
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute  pt-2 pl-28 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-2/12 fill-red-500" src={LogoUrl} alt="netflix-logo" />

      {user && (
        //This will be show only when user will be logged In
        <div className="py-4 ">
          {/* <button>English</button> */}
          <img
            className="w-10"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user-icon"
          />
          <button onClick={handleSignOut}>(Sign Out)</button>
        </div>
      )}
    </div>
  );
};

export default Header;
