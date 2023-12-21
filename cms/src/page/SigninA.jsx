import React, { useState } from "react";
import img from "../assets/img/login.png";
import img1 from "../assets/img/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleemail = (e) => {
    setEmail(e.target.value);
  };

  const handlename = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleconfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="bg-neutral-200 pr-14 max-md:pr-5 min-h-screen flex items-center">
      <div className="container mx-auto flex gap-5">
        <div className="flex-shrink-0 w-1/2">
          <div className="bg-red-500 flex flex-col h-screen pb-8 items-start">
            <a href="#" className="flex items-center p-2 md:ml-8 md:mt-2">
              <img src={img1} className="h-10 me-3" alt="Donnoeurs Logo" />
              <span className="text-xl font-semibold sm:text-xl whitespace-nowrap dark:text-white">
                DONNOEURS
              </span>
            </a>
            <div className="bg-[#B73E3E] flex w-9/12 h-full py-4 flex-col justify-center -mt-1 self-end max-md:px-5">
              <img
                srcSet={img}
                className="w-80 overflow-hidden ml-4 mt-12 self-center max-md:max-w-full max-md:my-10"
              />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-1/2">
          <div className="flex flex-col items-end">
            <div className="flex items-center font-serif gap-3.5">
              <div className="text-stone-400 text-base mt-5 grow whitespace-nowrap my-auto">
                Already have an account?
              </div>
              <button
                onClick={() => navigate("/")}
                className="bg-white text-rose-700 text-sm whitespace-nowrap mt-4 self-stretch grow justify-center items-stretch px-6 py-1.5 rounded-[30px] max-md:px-5">
                SIGN UP
              </button>
            </div>

            <div className="text-black text-4xl font-bold font-serif self-stretch mt-4 max-md:max-w-full max-md:text-4xl max-md:mt-10">
              Welcome to Donnoeurs!
            </div>
            <div className="self-stretch flex flex-col mt-5 pl-2.5 pr-16 max-md:max-w-full max-md:pr-5">
              <div className="text-black text-2xl font-serif self-stretch max-md:max-w-full max-md:mr-2">
                Register your account
              </div>
              <form>
                <div className="mt-6">
                  <label
                    for="name"
                    className="block text-base font-serif  text-gray-900">
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    value={name}
                    onChange={handlename}
                    className="bg-zinc-300 self-stretch flex w-4/5 shrink-0 h-8 flex-col mt-3 max-md:mr-2"
                    placeholder=""
                    required
                  />
                </div>

                <div className="mt-3">
                  <label
                    for="email"
                    className="block text-base md:text-base font-serif text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleemail}
                    className="bg-zinc-300 self-stretch flex w-4/5 shrink-0 h-8 flex-col mt-3 max-md:mr-2"
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
                    className="bg-zinc-300 self-stretch flex w-4/5 shrink-0 h-8 flex-col mt-3 max-md:mr-2"
                    required
                  />
                </div>
                <div class="mt-3">
                  <label
                    for="confirmpassword"
                    className="text-base md:text-base font-serif text-gray-900">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmpassword"
                    value={confirmPassword}
                    onChange={handleconfirmPassword}
                    className="bg-zinc-300 self-stretch flex w-4/5 shrink-0 h-8 flex-col mt-3 max-md:mr-2"
                    required
                  />
                </div>
                <div className="flex items-center ml-2 justify-between">
                  <button
                    onClick={() => navigate("/signup")}
                    className="bg-[#B73E3E] rounded-2xl hover:bg-rose-700 mt-6 text-white font-bold py-2 px-6  focus:outline-none focus:shadow-outline"
                    type="submit">
                    Register
                  </button>
                </div>
                <div className="flex md:mx-0 mt-5 pb-5 md:pb-0 ">
                  <a className="text-black text-base font-serif mr-5">
                    Create account with
                  </a>
                  <div className="mr-5">
                    <FcGoogle size={25} />
                  </div>
                  <div className="mr-5">
                    <FaApple size={25} />
                  </div>
                  <div className="mr-5">
                    <FaFacebook size={25} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
