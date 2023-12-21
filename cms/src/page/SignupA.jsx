import React, { useState } from "react";
import img from "../assets/img/login.png";
import img1 from "../assets/img/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="bg-neutral-200 flex items-stretch justify-between h-screen gap-5 pr-12 max-md:flex-wrap max-md:pr-5">
      <div className="bg-red-500 flex w-3/6 shrink-0 md:max-w-full flex-col">
        <a href="#" className="flex items-center p-2 md:ml-8 md:mt-2">
          <img src={img1} className="h-10 me-3" alt="Donnoeurs Logo" />
          <span className="text-xl font-semibold sm:text-xl whitespace-nowrap dark:text-white">
            DONNOEURS
          </span>
        </a>
      </div>
      <div className="flex items-center gap-3 mt-4 self-start font-serif">
        <div className="text-stone-400 text-base grow whitespace-nowrap my-auto">
          Don’t you have an account?
        </div>
        <button
          onClick={() => navigate("/signin")}
          className="bg-white text-rose-700 text-sm whitespace-nowrap self-stretch grow justify-center items-stretch px-5 py-1.5 rounded-[30px] max-md:px-5">
          SIGN IN
        </button>
      </div>

      <div className="absolute w-[1000px] h-5/6 bg-white mt-16 rounded-md ml-[132px] overflow-hidden shadow-md gap-8 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
        <div className="bg-[#B73E3E] flex w-3/6 h-full py-4 flex-col justify-center -mt-1 self-end max-md:px-5">
          <img
            src={img}
            className="w-80 overflow-hidden ml-4 mt-12 self-center max-md:max-w-full max-md:my-10"
          />
        </div>
        <div className="flex flex-col w-96 max-md:max-w-full self-center max-md:mt-0">
          <div className="text-black text-3xl font-bold font-serif max-md:max-w-full -mt-10 max-md:text-4xl">
            Welcome Back
          </div>
          <div className="text-black text-xl font-serif mb-5 self-stretch max-md:max-w-full max-md:mr-2">
            Register your account
          </div>
          <form>
            <div className="mt-5">
              <label
                for="username"
                className="block text-base md:text-base font-serif text-gray-900">
                Username
              </label>
              <input
                type="name"
                id="name"
                value={username}
                onChange={handleUsername}
                className="bg-zinc-300 self-stretch flex w-full shrink-0 h-8 flex-col mt-3 max-md:mr-2"
                required
              />
            </div>

            <div class="mt-3">
              <label
                for="password"
                className="text-base md:text-base font-serif text-gray-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePassword}
                className="bg-zinc-300 self-stretch flex w-full shrink-0 h-8 flex-col mt-3 max-md:mr-2"
                required
              />
            </div>
            <div
              onClick={() => navigate("/Forgot")}
              className="text-neutral-500  hover:underline text-sm font-serif self-stretch mt-4 max-md:max-w-full">
              Forgot password?
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate("/Dashboard")}
                className="bg-[#B73E3E] hover:bg-rose-700 mt-8 rounded-full text-white font-semibold py-2 px-12  focus:outline-none focus:shadow-outline"
                type="submit">
                Login
              </button>
            </div>
            <div className="flex md:mx-0 mt-5 pb-3 md:pb-0 ">
              <div className="text-black text-base font-serif ">Login with</div>
              <div className="ml-5">
                <FcGoogle size={20} />
              </div>
              <div className="ml-5">
                <FaApple size={20} />
              </div>
              <div className="ml-5">
                <FaFacebook size={20} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
