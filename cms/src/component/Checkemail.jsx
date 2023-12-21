import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import img from "../assets/img/check.png";

const Checkemail = () => {
  const navigate = useNavigate(); 
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/reset");
  };

  return (
    <div>
      <div className="flex mt-4 font-serif justify-center">
        <div className="text-rose-700 text-base mt-14 px-12 whitespace-nowrap my-auto">
          Try another way
        </div>
        <button
          onClick={openModal}
          className="bg-[#B73E3E] hover:bg-rose-700 mt-12 text-sm rounded-full text-white font-serif py-2 px-8  focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Next
        </button>
      </div>

      {showModal ? (
        <div className="fixed z-2 inset-0 overflow bg-gray-500 bg-opacity-75">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#B73E3E] rounded-xs px-8 py-2 m-4 max-w-xl">
              <div className="flex flex-col items-stretch mb-8 font-serif">
                <img
                  src={img}
                  className="aspect-[0.9] object-contain object-center w-52 overflow-hidden self-center "
                  alt=""
                />
                <div className="text-white text-center text-3xl font-normal -mt-8 max-md:max-w-full max-md:mt-10">
                  Check your email
                </div>
                <div className="text-white text-xl text-center mt-2 max-md:max-w-full max-md:mt-10">
                  We have sent password recovery instructions to your email
                </div>
                <div className="self-center">
                  <button
                    className="bg-red-500 hover:bg-red-400 mt-2 text-white py-2 px-12 rounded-full "
                    type="button"
                    onClick={closeModal}
                  >
                    <p>Open email</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Checkemail
