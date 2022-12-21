import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound, Active, Completed } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/active",
    element: <Active />,
  },
  {
    path: "/completed",
    element: <Completed />,
  },
]);
