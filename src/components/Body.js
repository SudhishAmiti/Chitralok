import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./WatchPage";

const Body = () => {
  const browseRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watch/:id",
      element: <WatchPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={browseRouter} />
    </div>
  );
};

export default Body;
