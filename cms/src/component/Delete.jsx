import React, { useState } from "react";

const Delete = ({ onDelete, onCancel }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      onDelete();
    } else {
      onCancel();
    }
  };
  return (
    
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative z-10 p-6 bg-white shadow-lg rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className=" gap-4 inline-flex">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4964b305085be0503493154fe8faf7f3600fab9b178a224fb454c110dd7b51c1?"
              className="w-16 h-16 object-cover object-center"
              alt="Icon"
            />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-lg font-semibold text-gray-700 leading-7">
                Delete Data
              </div>
              <div className="self-stretch text-sm w-80 text-gray-500 leading-tight">
                Are you sure you want to delete this post? This action cannot be
                undone.
              </div>
            </div>
          </div>
          <div className="mt-4 px-5 gap-5 flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-600">
                Don't show again
              </span>
            </label>

            <div className="flex gap-3 ml-auto">
              <button
                onClick={onCancel}
                className="inline-flex  bg-white rounded-lg justify-center px-4 py-2 text-sm font-medium text-gray shadow hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500">
                Cancel
              </button>
              <button
                onClick={onDelete}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                Dalete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Delete;
