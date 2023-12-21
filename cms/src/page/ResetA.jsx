import React, { useState } from "react";
import img from "../assets/img/login.png";
import img1 from "../assets/img/logo.png";
import ResetModals from "../component/ResetModals";

const Reset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleconfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
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

      <div className="absolute w-[1000px] h-5/6 bg-white mt-16 rounded-md ml-[132px] overflow-hidden shadow-md gap-8 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
        <div className="bg-[#B73E3E] flex w-3/6 h-full py-4 flex-col justify-center -mt-1 self-end max-md:px-5">
          <img
            src={img}
            className="w-80 overflow-hidden ml-4 mt-12 self-center max-md:max-w-full max-md:my-10"
          />
        </div>
        <div className="flex flex-col w-96 max-md:max-w-full self-center max-md:mt-0">
          <div className="text-black text-3xl font-bold font-serif mb-4 max-md:max-w-full -mt-10 max-md:text-4xl">
            Create new password
          </div>
          <div className="text-black text-lg font-serif mb-5 self-stretch max-md:max-w-full max-md:mr-2">
            Your new password must be different from previous used passwords
          </div>
          <form>
            <div className="mt-5">
              <label
                for="password"
                className="text-base md:text-base font-serif text-gray-900"
              >
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
            <div className="text-neutral-500 text-xs font-serif self-stretch mt-2 max-md:max-w-full">
              Must be at least 8 characters
            </div>

            <div class="mt-3">
              <label
                for="confirmpassword"
                className="text-base md:text-base font-serif text-gray-900"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                value={confirmPassword}
                onChange={handleconfirmPassword}
                className="bg-zinc-300 self-stretch flex w-full shrink-0 h-8 flex-col mt-3 max-md:mr-2"
                required
              />
            </div>
            <div className="text-neutral-500 text-xs font-serif self-stretch mt-2 max-md:max-w-full">
              Both password must match
            </div>
            <ResetModals />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
