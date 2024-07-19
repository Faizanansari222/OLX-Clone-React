import React from "react";
import logo from "./Image/OLX-Symbol.png";

export default function NavBar(props:any) {
  const { onClick } = props;
  return (
    <>
      <div>
        <div className="fixed pt-5 pb-5 top-0 z-10 mb-10 bg-white border-b w-full ">
          <div className="flex gap-8 items-center mb-5">
            <div className="">
              <img className="w-14" src={logo} alt="" />
            </div>
            <div className="flex gap-4">
              <a
                className="text-base font-bold text-[#002f34] flex gap-2   items-center"
                href=""
              >
                <div className="p-1 text-black bg-gradient-to-b text-3xl  from-slate-300 rounded-full">
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
                <div className="p-2 text-black bg-gradient-to-b  from-slate-300 rounded-full">
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
          </div>
          <div className="flex gap-10 pr-10  items-center justify-around  ">
            <div className="flex gap-3 w-full">
              <div className="text-lg w-1/2 px-3 rounded border border-gray-400  flex items-center">
                <svg
                  className="text-3xl mr-1 text-[#002f34]"
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
                  className="p-2 w-full outline-none"
                  type="text"
                  placeholder="Location or Compound"
                />
                <div className="py-2">
                  <svg
                    className="text-3xl "
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
              <div className="text-lg pl-3 rounded w-full border active:border-blue-300 focus:border-blue-300 border-gray-400 flex items-center">
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
            <div className="flex items-center  gap-3">
              <span className="hover:border-b-white  border-b-2  border-[#002f34]">
                <button onClick={onClick} className=" font-bold  text-[#002f34] hover:border-none">
                  Login
                </button>
              </span>
              <div className="flex justify-center items-center">
                <img
                  className="z-10 w-32 relative "
                  src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg"
                  alt=""
                />
                <button className="z-30 absolute gap-1 p-2  flex items-center font-bold text-base text-[#002f34]">
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
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 mb-8 flex text-[#002f34]   items-center gap-6">
          <a href="" className="flex  items-center gap-2 text-sm font-semibold">
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
