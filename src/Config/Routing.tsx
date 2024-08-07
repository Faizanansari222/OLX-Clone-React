import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import AddProduct from "../Component/AddProduct";
import NavBar from "../Component/NavBar";

  const router = createBrowserRouter([
    
    
    
    {
      path: "/",
      element: <Dashboard />,
    }, {
      path: "/detail/:id",
      element: <Detail />,
    },
    {
      path: "/addproduct",
      element: <AddProduct/>,
    },
  ]);

  export default function RouterAdd () {
  return<>
    <RouterProvider router={router} />
    </>
  
  }