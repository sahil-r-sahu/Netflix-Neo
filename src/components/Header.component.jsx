import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice.utils";
import { LogoUrl, suported_Language } from "../utils/constant.utils";
import { togleGptSearchView } from "../utils/gptSlice.utils";
import { changeLanguage } from "../utils/configSlice.utils";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gptSearch.showGptSearch);

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

  //Togles the GptSearch button
  const handleGptSearchClick = () => {
    dispatch(togleGptSearchView());
  };

  //Language change option dynamic
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute  pt-2 pl-28 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-2/12 fill-red-500" src={LogoUrl} alt="netflix-logo" />

      {user && (
        //This will be show only when user will be logged In
        <div className="flex gap-5  items-center">
          {showGPTSearch && (
            //Multi lnguage support only for GPT page
            <select
              onChange={handleLanguageChange}
              className="text-white border-2 border-white hover:border-red-500 rounded-lg px-4 py-2"
            >
              {suported_Language.map((lang) => (
                <option
                  className="bg-gray-600"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-500/80 hover:opacity-50 text-white px-5 py-2 rounded-lg cursor-pointer border-2 border-white"
            onClick={handleGptSearchClick}
          >
            {showGPTSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-10 h-10 rounded-lg border-2 border-white"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user-icon"
          />
          <button
            className="bg-red-500/80 hover:opacity-50 text-white px-3 py-2 rounded-lg cursor-pointer border-2 border-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
