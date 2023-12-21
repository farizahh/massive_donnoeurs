import React, { useState } from "react";
import img from "../assets/img/ok.png"

const ResetModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <button
          onClick={openModal}
          className="bg-[#B73E3E] hover:bg-rose-700 mt-12 rounded-full text-white font-serif py-2 px-8  focus:outline-none focus:shadow-outline"
          type="submit">
          Reset Password
        </button>
      </div>

      {showModal ? (
        <div className="fixed z-2 inset-0 overflow bg-gray-500 bg-opacity-75">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg px-8 py-2 m-4 max-w-lg">
              <div className="flex flex-col items-stretch mb-8 font-serif">
                <img src={img} className="aspect-[0.9] object-contain object-center w-24 overflow-hidden self-center max-w-full" alt=""/>

                <div className="text-black text-center text-2xl font-bold mt-2 max-md:max-w-full max-md:mt-10">
                  Berhasil!
                </div>
                <div className="text-black text-base font-normal mt-4 max-md:max-w-full max-md:mt-10">
                  Anda berhasil mengatur ulang sandi, silahkan login
                </div>
                <div className="self-center">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 mt-2 text-white font-bold py-2 px-8 rounded"
                    type="button"
                    onClick={closeModal}>
                    Ok
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

export default ResetModal;
