import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.component";
import Login from "./Login.component";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.utils";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.utils";

const Body = () => {
  const dispatch = useDispatch();

  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    //whenever the Auth state changes this will be called >>> https://firebase.google.com/docs/auth/web/manage-users?hl=en

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        //adding data of user to the store
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out & removing his data
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
