import React, { useState } from "react";
import img from "../assets/img/forgotbe.png";
import img1 from "../assets/img/logo.png";
import Checkemail from '../component/Checkemail';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleemail = (e) => {
    setEmail(e.target.value);
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

      <div className="absolute w-[1000px] h-5/6 bg-white mt-16 rounded-md ml-[132px] overflow-hidden shadow-lg gap-8 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
        <div className="bg-[#B73E3E] flex w-3/6 h-full py-4 flex-col justify-center -mt-1 self-end max-md:px-5">
          <img
            src={img}
            className="w-72 overflow-hidden ml-4 mt-12 self-center max-md:max-w-full max-md:my-10"
          />
        </div>
        <div className="flex flex-col w-96 max-md:max-w-full self-center max-md:mt-0">
          <div className="text-black text-6xl font-normal font-serif  mb-4 max-md:max-w-full -mt-14 max-md:text-4xl">
            Forgot Password?
          </div>
          <div className="text-black text-lg font-serif mt-4 self-stretch max-md:max-w-full max-md:mr-2">
            Enter the email addres associated with your account
          </div>
          <form>
            <div className="mt-6 font-serif text-sm">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleemail}
                placeholder="Enter Email Address"
                className="bg-white shadow-md self-stretch flex w-full shrink-0 h-8 flex-col mt-3 max-md:mr-2"
                required
              />
            </div>
            <Checkemail/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
