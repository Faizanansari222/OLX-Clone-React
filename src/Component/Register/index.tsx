import React, { useState } from "react";
import Logo from "./image/logo.png";
import GoogleBtn from "./image/Google.png";
import FBBtn from "./image/Facebook.png";
import { regisFun } from "../../Config/firebase";
// import { RegisFun } from "../../Config/firebase";
// import { log } from "console";

interface LoginProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Register: React.FC<LoginProps> = ({ isVisible, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (!isVisible) return null;
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  const regisBtn = (e: any) => {
    e.preventDefault()
    regisFun(email,password);


  };

  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className=" fixed inset-0 z-50 bg-black bg-opacity-15 cursor-all-scroll backdrop-blur-sm shadow-sm flex justify-center items-center"
    >
      <div className=" w-1/3  sm:w-[400px]">
        {/* <!-- component --> */}
        <div className="bg-[#002f34] my-10  text-white flex h-[600px]  rounded-xl flex-col items-center sm:justify-center sm:pt-0">
          <div className="flex items-center justify-center mr-4 w-3 h-3 place-self-end">
            <button
              onClick={onClose}
              className="hover:px-2 hover:rounded-full hover:bg-white hover:text-[#002f34] cursor-pointer text-white font-semibold text-xl"
            >
              X
            </button>
          </div>
          <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto  gap-2">
            <img className="w-24 m-auto mb-1 sm:w-20" src={Logo} alt="Logo" />

            <h1 className="text-2xl sm:text-2xl text-white mb-1 sm:mb-1 ">
              Create a new <span className="font-bold">OLX</span> account
            </h1>
          </div>
          <div className="flex items-center px-5 mt-1 h-10 w-full gap-3">
            <a>
              <img
                className="cursor-pointer hover:border-2 hover:border-white rounded-md"
                src={GoogleBtn}
                alt=""
              />
            </a>
            <a>
              <img
                className="cursor-pointer hover:border-2 hover:border-white rounded-md"
                src={FBBtn}
                alt=""
              />
            </a>
          </div>

          <div className="relative  w-full max-w-lg sm:mt-3">
            <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
            <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
              <div className="flex flex-col p-4">
                <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                  Registration
                </h3>
                <p className="mt-1.5 text-sm font-medium text-white/50">
                  Welcome back, enter your credentials to continue.
                </p>
              </div>
              <div className="p-6 pt-0">
                <form>
                  <div className="space-y-4">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                            User Name{" "}
                          </label>
                          <div className="absolute right-3 translate-y-2 text-green-200"></div>
                        </div>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="useremail"
                          placeholder="username"
                          className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                            Useremail{" "}
                          </label>
                          <div className="absolute right-3 translate-y-2 text-green-200"></div>
                        </div>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          name="useremail"
                          placeholder="useremail"
                          className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                            Password
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="remember"
                        className="outline-none focus:outline focus:outline-sky-300"
                      />
                      <span className="text-xs">Remember me</span>
                    </label>
                    <a
                      className="text-sm font-medium text-foreground underline"
                      href="/forgot-password"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-4 flex items-center justify-end gap-x-2">
                    <button
                      onClick={regisBtn}
                      className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
