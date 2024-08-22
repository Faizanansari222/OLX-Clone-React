import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Detail from "../views/Detail";
import Dashboard from "../views/Dashboard/index";
import AddProduct from "../Component/AddProduct";




// export const Main = () => {
//   const [user, setUser] = useState();
//   // const navigate = useNavigate();
//   useEffect(() => {
//     onAuthStateChanged(auth, (user: any) => {
//       setUser(user);
//     });
//   }, []);
  
//   return <Outlet/>
// };

const router = createBrowserRouter([
  
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
  );

export default function RouterAdd() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

//agar login ya signup ke page pe he or user login he to wo navigate ho jae DASHBOARD pe.
// ager user addproduct pe he or user logout ho to navigate kr de.
