import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    //Signing out the user >>> https://firebase.google.com/docs/auth/web/password-auth
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute  pt-2 pl-28 bg-linear-to-b from-black z-10 flex justify-between">
      <img
        className="w-2/12 fill-red-500"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="p-4">
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
