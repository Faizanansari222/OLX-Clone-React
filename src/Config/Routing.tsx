import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    }, {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);

  export default function RouterAdd () {
  return<>
    <RouterProvider router={router} />
    </>
  
  }