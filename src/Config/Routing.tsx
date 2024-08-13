import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import AddProduct from "../Component/AddProduct";
import NavBar from "../Component/NavBar";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";



export const Main = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });
  }, []);
  useEffect(() => {
    const pathname = window.location.pathname;
    console.log(pathname);
    
    if (user) {
      if(pathname === '/login' || pathname === '/register' ){

        navigate('/')
      }
    }else{
      if (pathname === '/addproduct' || pathname === '/detail/:id') {

        navigate('/login')
      }
    }
  }, [window.location.pathname, user]);

  return <Outlet/>
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
    ],
  },
]);

export default function RouterAdd() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

//agar login ya signup ke page pe he or user login he to wo navigate ho jae DASHBOARD pe.
// ager user addproduct pe he or user logout ho to navigate kr de.
