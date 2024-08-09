import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../Store/cartSlice";

function AddToCart({ isVisible, addToCartClose }: any) {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") addToCartClose();
  };

  return (
    <>
      <div
        onClick={handleClose}
        id="wrapper"
        className="fixed bg-opacity-5 cursor-all-scroll backdrop-blur-sm inset-0 z-50 shadow-md backdrop:blur overflow-hidden  flex justify-center h-full bg-[#002f34]  antialiased dark:bg-gray-900"
      >
        <section
          id="wrapper"
          className=" bg-[#002f34] rounded-2xl overflow-y-auto h-[500px] m-auto w-1/2 antialiased dark:bg-gray-900"
        >
          <div className="p-3   px-4 2xl:px-0">
            <div
              onClick={addToCartClose}
              className="text-white font-medium text-xl fixed cursor-pointer"
            >
              X
            </div>
            <div className="mt-2 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  <div className="fixed w-[626px] sm:hidden md:block border-white border m-auto overflow-hidden top-20 flex items-center justify-center rounded-lg shadow-sm bg-[#0d262a] text-white p-4 dark:bg-gray-800 md:p-6">
                    
                      <p className="text-base font-bold text-white dark:text-white">
                        Item
                      </p>
                      <label className="sr-only">Choose quantity:</label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <p className="text-base font-bold text-white dark:text-white">
                            Quentity
                          </p>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-white dark:text-white">
                            Price
                          </p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                          href="#"
                          className="text-base font-medium text-white hover:underline dark:text-white"
                        ></a>
                      </div>
                    
                  </div>
                </div>
              </div>
            </div>
            {cart.map((data: any ) => {
              const { id, title, price, image } = data;
              return (
                <div
                  key={id}
                  className="pt-4 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8"
                >
                  <div className=" mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    <div className="space-y-6">
                      <div className="rounded-lg shadow-sm bg-[#0d262a] text-white p-4 dark:bg-gray-800 md:p-6">
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <a href="#" className="shrink-0 md:order-1">
                            <img
                              className=" w-20 dark:hidden"
                              src={image}
                              alt={title}
                            />
                          </a>

                          <label className="sr-only">Choose quantity:</label>
                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                              <button
                                type="button"
                                id="decrement-button"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-gray-100 hover:bg-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <svg
                                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 2"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h16"
                                  />
                                </svg>
                              </button>
                              <input
                                type="text"
                                id="counter-input"
                                className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-white focus:outline-none focus:ring-0 dark:text-white"
                                placeholder=""
                                value="4"
                                required
                              />
                              <button
                                type="button"
                                id="increment-button"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <svg
                                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 1v16M1 9h16"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold text-white dark:text-white">
                                Rs.{price}
                              </p>
                            </div>
                          </div>

                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a
                              href="#"
                              className="text-base font-medium text-white hover:underline dark:text-white"
                            >
                              {title}
                            </a>

                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                              >
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                  />
                                </svg>
                                Add to Favorites
                              </button>

                              <button
                              onClick={()=>{dispatch(removeCart(id))}}
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              >
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                  />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default AddToCart;
