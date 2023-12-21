import React from "react";
import Sidebar from "../component/sidebar";
import { IoIosClose } from "react-icons/io";
import { AiOutlineSave } from "react-icons/ai";

const InputE = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <div className="ml-72 mt-20">
          <div className="pr-5 mt-10">
            <div className="flex">
              <div>
                <h2 className="font-medium text-xl">Input Data Event</h2>
              </div>
              <div className="ml-[60%]">
                <button
                  type="button"
                  class="py-1 px-2 me-2 mb-2 text-xs font-medium text-gray-500 w-20 focus:outline-none bg-gray-100 rounded-lg border border-gray-200 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 drop-shadow-lg"
                >
                  <div className="flex">
                    <div className="mt-1">
                      <IoIosClose size={20} />
                    </div>
                    <div className="mt-1.5">Cancel</div>
                  </div>
                </button>
                <button
                  type="button"
                  class="text-white bg-[#5C59E8] hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 me-2 mb-2 focus:outline-none drop-shadow-lg"
                >
                  <div className="flex">
                    <div className="mt-1">
                      <AiOutlineSave size={20} />
                    </div>
                    <div className="mt-1.5  ml-2">Save Event</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-white shaddow-lg p-3 mx-5 drop-shadow-lg rounded-lg">
              <h2 className="font-semibold">General Information</h2>
              <form action="" className="mt-1 p-3">
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                  >
                    Nama Acara
                  </label>
                  <input
                    type="text"
                    id="text"
                    class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tulis nama acaramu disini ...."
                    required
                  />
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      Tanggal
                    </label>
                    <input
                      type="date"
                      id="date"
                      class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="last_name"
                      class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      Tempat
                    </label>
                    <input
                      type="text"
                      id="location"
                      class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tuliskan lokasi acaramu disini ...."
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="company"
                      class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      Penyelenggara
                    </label>
                    <input
                      type="text"
                      id="company"
                      class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tulis nama penyelenggara disini ...."
                      required
                    />
                  </div>
                </div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >
                  Deskripsi
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Berikan deskripsi singkat untuk acaramu ...."
                ></textarea>
              </form>
            </div>

            <div className="bg-white shaddow-lg mt-5 p-3 mx-5 drop-shadow-lg rounded-lg">
              <h2 className="font-semibold">Media</h2>
              <p className="font-medium text-gray-500 mt-3 ml-3">Gambar</p>
              <form action="" className="mt-1 p-3">
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InputE;
