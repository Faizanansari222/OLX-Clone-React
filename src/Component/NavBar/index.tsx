import React, { useEffect, useState } from "react";
import logo from "./Image/OLX-Symbol.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, auth } from "../../Config/firebase";
import DropDown from "../../views/DropDown";
import { useSelector } from "react-redux";

export default function NavBar(props: any) {
  const { onClick, onAddToCart } = props;
  const [userInfo, setUserInfo] = useState<any>();
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const cart = useSelector((state: any) => state.cart);
  // console.log(cart);

  useEffect(() => {}, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      }
    });
  }, [userInfo]);

  return (
    <>
      <div className="mb-32 sm:mb-0  md:mb-0">
        {profileOpen && <DropDown closeFun={() => setProfileOpen(false)} />}

        <div className="fixed pt-5 pb-5 top-0 z-10 m bg-white border-b w-full ">
          <div className="flex md:gap-8 items-center gap-4 md:justify-normal mb-5">
            <div 
                className="text-2xl  sm:hidden md:hidden text-[#002f34]">
              <svg
              className="font-black"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="w-11 md:w-14">
              <img className="w-full" src={logo} alt="" />
            </div>

            <a className="flex items-center gap-2 font-bold text-[#002f34]" href="">
              <div className="p-2  bg-gradient-to-b text-2xl  from-slate-300 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="m80 224l37.78-88.15C123.93 121.5 139.6 112 157.11 112h197.78c17.51 0 33.18 9.5 39.33 23.85L432 224m-352 0h352v144H80zm32 144v32H80v-32m352 0v32h-32v-32"
                  />
                  <circle
                    cx="144"
                    cy="288"
                    r="16"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <circle
                    cx="368"
                    cy="288"
                    r="16"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
              </div>
              Motors
            </a>
            <a
              className="text-base font-bold text-[#002f34] flex gap-2 items-center"
              href=""
            >
              <div className="p-2 bg-gradient-to-b  from-slate-300 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              Property
            </a>
          </div>
          <div className="flex gap-10 pr-10  items-center justify-around  w-full">
            <div className=" sm:flex gap-3 w-full md:flex md:gap-3 sm:w-full md:w-full">
              <div className="sm:text-lg px-3  sm:rounded sm:border sm:border-gray-400 md:rounded md:border hidden sm:flex md:flex md:border-gray-400  items-center">
                <svg
                  className=" sm:text-4xl  text-[#002f34]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                    />
                  </g>
                </svg>
                <input
                  className="p-2  outline-none"
                  type="text"
                  placeholder="Location or Compound"
                />
                <div className="py-2">
                  <svg
                    className="sm:text-2xl sm:font-extrabold text-[#002f34] "
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="non-zero"
                      d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-lg pl-3 rounded border w-[100%] active:border-blue-300 focus:border-blue-300 border-gray-400 flex items-center">
                <input
                  className="p-2 w-full outline-none"
                  type="text"
                  placeholder="Find Cars, Mobile Phones and More..."
                />
                <div className="bg-[#002f34] text-white p-2">
                  <svg
                    className="text-3xl font-semibold "
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-3 md:flex md:items-center  md:gap-3">
              <div>
                {userInfo ? (
                  <div className=" md:gap-2 sm:gap-2  text-[#002f34] sm:flex sm:items-center  sm:justify-around md:flex md:items-center md:justify-around">
                    <div className="  hover:bg-blue-100 rounded-full w-full">
                      <svg
                        className="sm:text-2xl md:text-3xl  "
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"
                        />
                      </svg>
                    </div>
                    <div className="p-2 hover:bg-blue-100 rounded-full ">
                      <button className="" onClick={onAddToCart}>
                        <h1 className="px-2 rounded-full  font-medium text-red-600 fixed sm:top-[76px]  md:top-[76px]  ">
                          {cart.length}
                        </h1>

                        <svg
                          className="sm:text-2xl md:text-3xl"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="currentColor"
                            d="M29.02 11.754L8.416 9.474L7.16 4.715a.76.76 0 0 0-.727-.558H3.34a1.21 1.21 0 0 0-.963-.49a1.24 1.24 0 1 0 0 2.483c.4 0 .738-.2.965-.492h2.512l5.23 19.8a3.28 3.28 0 0 0-.89 2.242a3.29 3.29 0 0 0 3.292 3.293a3.296 3.296 0 0 0 3.297-3.293a3.2 3.2 0 0 0-.093-.743h5.533a3.3 3.3 0 0 0-.092.743c0 1.82 1.476 3.293 3.296 3.293S28.72 29.52 28.72 27.7a3.296 3.296 0 0 0-3.294-3.297c-.95 0-1.8.41-2.402 1.053h-7.136a3.28 3.28 0 0 0-2.402-1.053c-.38 0-.738.078-1.077.196l-.182-.686H26.81a2.5 2.5 0 0 0 2.39-1.96l1.575-7.798a2 2 0 0 0 .04-.414a1.995 1.995 0 0 0-1.795-1.988zm-3.592 16.24a.3.3 0 0 1-.297-.295c.003-.166.135-.298.298-.298s.295.132.297.297a.3.3 0 0 1-.297.294zm1.78-7.495l.948-.95l-.318 1.58zm-14.453-9.037L13.79 12.5l-1.29 1.29l-1.293-1.29l1.087-1.088zm4.498.498l.538.54l-1.29 1.29l-1.293-1.29l.688-.69l1.358.15zM9.63 14.076l.87-.868l1.29 1.292l-1.29 1.29l-.565-.563l-.304-1.152zm-.295-1.12l-.328-1.24l.785.785zM21.79 16.5l-1.29 1.29l-1.293-1.29l1.292-1.293zm-.583-2l1.292-1.292l1.29 1.292l-1.29 1.292zM18.5 15.79l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.292-1.29l1.292-1.293zm-3.29-.71l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.293-1.29l1.292-1.293zm-3.29.707l1.29 1.292l-.784.783l-.54-2.044l.033-.033zm.802 3.197l1.197-1.197l1.29 1.292l-1.29 1.29l-1.13-1.13zm1.906-1.905l1.29-1.293l1.293 1.292l-1.29 1.29l-1.292-1.29zm3.292.707l1.292 1.292l-1.292 1.29l-1.292-1.29zm.708-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm3.29.707l1.293 1.292l-1.29 1.29l-1.292-1.292zm.71-.708l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293L27.79 14.5l-1.29 1.292l-1.293-1.293zm-.71-.708l-1.155-1.156l2.082.23zM21.792 12.5l-1.29 1.292l-1.293-1.292l.29-.29l2.253.25zm-7.29-.71l-.152-.15l.273.03l-.12.12zm-4 .002l-.65-.65l1.17.13zm4 9.415l1.205 1.205h-2.41zm4 0l1.205 1.206h-2.412zm4 0l1.207 1.207h-2.414zm.707-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm2-2l1.292-1.292l1.29 1.29l-1.29 1.293l-1.293-1.29zm3.292-.71l-1.292-1.29l1.29-1.292l.445.444l-.43 2.124l-.014.015zm.5-4.5l-.5.5l-.66-.657l1.017.112c.054.008.1.026.144.044zM13.488 27.993a.297.297 0 0 1 0-.593a.296.296 0 0 1 0 .591zm13.323-5.58h-1.517l1.207-1.207l.93.93c-.187.17-.423.29-.62.277"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      onClick={() => {
                        setProfileOpen(!profileOpen);
                      }}
                      className="flex items-center"
                    >
                      <img 
                        className="md:w-9 sm:w-8  rounded-full  "
                        src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                        alt=""
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:text-4xl sm:text-2xl sm:w-14 md:w-16"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <span className="hover:border-b-white  border-b-2  border-[#002f34]">
                    <button
                      onClick={onClick}
                      className=" font-bold  text-[#002f34] hover:border-none"
                    >
                      Login
                    </button>
                  </span>
                )}
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="z-10 sm:m-2  md:m-1 sm:hidden md:block md:w-36 relative "
                  src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg"
                  alt=""
                />
                {userInfo ? (
                  <button
                    onClick={() => navigate("/addproduct")}
                    className="z-30  md:text-sm sm:hidden  absolute gap-1 p-2  md:flex md:items-center md:font-bold  text-[#002f34]"
                  >
                    <svg
                      className="font-bold text-[#002f34]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"
                      />
                    </svg>
                    SELL
                  </button>
                ) : (
                  <button
                    onClick={onClick}
                    className="z-30 absolute gap-1 p-2  flex items-center font-bold text-base text-[#002f34]"
                  >
                    <svg
                      className="font-bold "
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"
                      />
                    </svg>
                    SELL
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:text-sm  mt-36 sm:mb-5 md:mb-5 sm:flex md:flex text-[#002f34]   items-center sm:gap-3 md:gap-3">
          <a href="" className="flex sm:text-sm items-center gap-2 text-sm font-semibold">
            ALL CATEGORIES{" "}
            <svg
              className="text-2xl "
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fill-rule="non-zero"
                d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
              />
            </svg>{" "}
          </a>
          <div className="text-[#002f34]    flex items-center gap-4">
            <a
              href=""
              className="flex items-center hover:text-blue-400 gap-2 text-medium font-sm"
            >
              Mobile Phones
            </a>
            <a
              href=""
              className="flex items-center hover:text-blue-400 gap-2 text-medium font-sm"
            >
              Cars
            </a>
            <a
              href=""
              className="flex items-center hover:text-blue-400 gap-2 text-medium font-sm"
            >
              Motorcycles
            </a>
            <a
              href=""
              className="flex items-center hover:text-blue-400 gap-2 text-medium font-sm"
            >
              Houses
            </a>
            <a
              href=""
              className="flex items-center hover:text-blue-400 gap-2 text-medium font-sm"
            >
              Video-Audios
            </a>
            <a
              href=""
              className="flex items-center hover:text-blue-400 gap-2 text-medium font-sm"
            >
              Tablets
            </a>
            <a
              href=""
              className="flex items-center hover:text-blue-400 gap-2 text-medium font-sm"
            >
              Land & Plots
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
