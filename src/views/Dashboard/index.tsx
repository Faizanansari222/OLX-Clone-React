import React, { useEffect, useState } from "react";
import { Header } from "../../Component/Header";
import NavBar from "../../Component/NavBar";
import Category from "../../Component/Category";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer";
import { Register } from "../../Component/Register";
import LoginSecond from "../../Component/LoginSecond";
import { Getdata } from "../../Config/firebase"
function Dashboard() {
  const [heartActive, setHeartActive] = useState<any>({});
  const [products, setProducts] = useState<any>([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegis, setShowRegis] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    // fireStoreData()
     Getdata("ProductInfo").then((data:any) =>{
      setProducts(data)
      console.log(data);
      
    
    })
      .catch(error => console.error('Error fetching products:', error));
  }, [products]);

  const handleHeartClick = (id:any) => {
    setHeartActive((prev:any) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <LoginSecond 
        isVisible={showLogin} 
        loginClose={() => setShowLogin(false)} 
        onClick={() => setShowRegis(true)}  
        onClose={() => setShowLogin(false)}
      />

      <Register
        isVisible={showRegis}
        loginIsVisible={showLogin}
        onClose={() => setShowRegis(false)}
      />

      <div className="p-5">
        <NavBar onClick={() => setShowLogin(true)} />
        <Header />
        <Category />
        <div className="grid grid-cols-4 gap-5">
          {products.length > 0 ? products.map((item:any) => {
            const { id, price, title, description, image } = item;
            return (
              <div
                key={id}
                onClick={() => navigate(`/detail/${id}`)}
                className="h-70 overflow-y-hidden"
              >
                <div className="border h-full m-auto shadow-lg container rounded">
                  <img src="https://loading.io/assets/mod/spinner/bar-chart/index.svg" alt="" />
                  <div className="w-full overflow-hidden">
                    <div className="flex pb-3 items-center justify-center h-28 m-5">
                      <img className="w-full flex" src={image} alt={title} />
                    </div>
                  </div>
                  <div className="px-6">
                    <div className="text-[#002f34] flex items-center justify-between">
                      <h1 className="font-bold text-lg py-3 text-[#002f34]">
                        Rs. {price}
                      </h1>
                      <button onClick={(e) => {
                        e.stopPropagation();
                        handleHeartClick(id);
                      }}>
                        {heartActive[id] ? (
                          <svg
                            className="text-2xl cursor-pointer text-[#002f34]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="text-2xl cursor-pointer text-[#002f34]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <h1 className="text-lg text-[#002f34] pb-2">{title}</h1>
                    <div className="flex items-end justify-start">
                      <div>
                        <h1 className="flex justify-start items-end text-base text-gray-600">
                          Karachi
                        </h1>
                        <h1 className="flex justify-start items-end text-sm text-gray-600 pb-4">
                          6 days ago
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
