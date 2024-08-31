import React, { useEffect, useState } from "react";
import { Header } from "../../Component/Header";
import NavBar from "../../Component/NavBar";
import Category from "../../Component/Category";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer";
import { Register } from "../../Component/Register";
import LoginSecond from "../../Component/LoginSecond";
import { getData } from "../../Config/firebase";
import { addToCart } from "../../Store/cartSlice";
import { useDispatch } from "react-redux";
import AddToCart from "../../Component/AddToCart";
function Dashboard() {
  const [heartActive, setHeartActive] = useState<any>({});
  const [fireStoreProducts, setFireStoreProducts] = useState<any>([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegis, setShowRegis] = useState(false);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await getData();
        setFireStoreProducts(product);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);




  const handleHeartClick = (id: any) => {
    setHeartActive((prev: any) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
    <AddToCart isVisible={showAddToCart} addToCartClose={() => setShowAddToCart(false)}/>
    {/* <AddToCart isVisible={showAddToCart} onClose={() => setShowAddToCart(false)}/> */}
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
        <NavBar onClick={() => setShowLogin(true)} onAddToCart={() => setShowAddToCart(true)} />
        <Header />
        <Category />
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5">
          {fireStoreProducts.length > 0 ? (
            fireStoreProducts.map((item: any) => {
              const { id, price, title, description, image } = item;
              return (
                <>
                <div
                  key={id}
                  onClick={() => navigate(`/detail/${id}`)}
                  className="h-70 overflow-y-hidden"
                >
                  <div className="border  h-full m-auto shadow-lg container rounded">
                    <img
                      src="https://loading.io/assets/mod/spinner/bar-chart/index.svg"
                      alt=""
                    />
                    <div className="w-full overflow-hidden">
                      <div className="flex pb-3 items-center justify-center h-28 m-5">
                        <img className="w-full flex" src={image} alt={title} />
                      </div>
                    </div>
                    <div className="px-6 ">
                      <div className="text-[#002f34] flex items-center justify-between">
                        <h1 className="font-bold text-lg py-3 text-[#002f34]">
                          Rs. {price}
                        </h1>
                        <div className="flex gap-3 ">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleHeartClick(id);
                            }}
                          >
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
                          <div>
                            <button
                              onClick={() => dispatch(addToCart(item))}
                              className="text-2xl"
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 56 56"
                              >
                                <path
                                  fill="currentColor"
                                  d="M.953 6.719c0 .96.797 1.781 1.735 1.781h7.921l3.75 25.734c.493 3.328 2.25 5.414 5.649 5.414H47.36c.913 0 1.71-.75 1.71-1.757c0-1.008-.797-1.758-1.71-1.758H20.406c-1.336 0-2.156-.938-2.367-2.367l-.375-2.461h29.742c3.422 0 5.18-2.11 5.672-5.461l1.875-12.399a7 7 0 0 0 .094-.89c0-1.125-.844-1.899-2.133-1.899h-38.25l-.469-2.976c-.234-1.805-.89-2.72-3.28-2.72H2.687c-.937 0-1.734.822-1.734 1.76M18.04 47.242c0 2.133 1.688 3.797 3.82 3.797a3.766 3.766 0 0 0 3.797-3.797a3.78 3.78 0 0 0-3.797-3.797c-2.132 0-3.82 1.688-3.82 3.797m21.914 0c0 2.133 1.711 3.797 3.82 3.797c2.133 0 3.82-1.664 3.82-3.797c0-2.11-1.687-3.797-3.82-3.797c-2.109 0-3.82 1.688-3.82 3.797"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <h1 className="text-lg text-[#002f34] pb-2">{title}</h1>

                      <div className="flex items-center justify-between">
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
                </>);
            })
          ) : (
            <div className="flex absolute inset-0 justify-center items-center z-50 h-screen  space-x-2 backdrop-blur-md  dark:invert">
              <span className="sr-only">Loading...</span>
              <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-8 w-8 bg-white rounded-full animate-bounce"></div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;