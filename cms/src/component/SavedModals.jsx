import React, { useState } from "react";

const SavedModals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldShowModal, setShouldShowModal] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDonNotShowAgain = () => {
    setShouldShowModal(false);
  };

  const handleSaveChanges = () => {
    console.log("Save changes");
    closeModal();
  };


  return (
    <div>
      <button
        onClick={openModal}
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Simpan
      </button>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="relative p-6 bg-white rounded-md shadow-xl transition-all transform">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/51bcfbb11af7ada721e2893f02fb18ef3cf6427190196ab16720e429b21b6fb5?"
                  className="w-16 h-16 object-cover object-center"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-lg font-semibold text-gray-700 leading-7">
                    Saved changes
                  </div>
                  <div className="self-stretch text-sm text-gray-500 leading-tight">
                    Do you want to save or discard changes?
                  </div>
                </div>
              </div>
              

              <div className="mt-4 px-5 gap-5 flex items-center justify-between">
                <div
                  className="text-sm mr-4 text-gray-500 underline
                  hover:text-gray-900">
                  <input
                    onClick={handleDonNotShowAgain}
                    type="checkbox"
                    name="status"
                  />
                  Don't show again
                </div>
                <button
                  onClick={closeModal}
                  className="inline-flex  bg-white rounded-lg justify-center px-4 py-2 text-sm font-medium text-gray shadow hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500">
                  Cancel
                </button>
                <button
                  onClick={handleSaveChanges}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-violet-500 border border-violet-500 rounded-md hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedModals;
