import { createHashRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.component";
import Login from "./Login.component";

const Body = () => {
  const AppRouter = createHashRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
