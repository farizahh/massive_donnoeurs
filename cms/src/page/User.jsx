import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

const User = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    // Call API here with the form data
    closeModal();
  };
  return (
    <div>
      <Sidebar />
      <main>
        <div className="ml-72 mt-20">
          <div className="pr-5 mt-10">
            <h2 className="font-semibold text-xl text-center">DATA USER</h2>
            <div className="text-end">
              <button
                onClick={openModal}
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
              >
                <span>
                  Tambahkan User Baru
                  <span className="font-bold bg-[#413E54] text-white p-1 px-2 rounded-full ml-2">
                    +
                  </span>
                </span>
              </button>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Nama
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Username
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Password
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Andre
                    </th>
                    <td class="px-6 py-4">andre@gmail.com</td>
                    <td class="px-6 py-4">
                      $2b$10$b1yPViOZdt1XiR4T9lHyTOmdVxW0vUXqrRiHD1lIoR7
                    </td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline flex"
                      >
                        <div className="flex">
                          <a href="/editu">
                            <div>
                              <TbEdit size={20} />
                            </div>
                          </a>
                          <a href="">
                            <div className="ml-5">
                              {" "}
                              <RiDeleteBinLine size={20} />
                            </div>
                          </a>
                        </div>
                      </a>
                    </td>
                  </tr>

                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Malik
                    </th>
                    <td class="px-6 py-4">malik123@gmail.com</td>
                    <td class="px-6 py-4">
                      $2b$10$KCccdXy4mIij21al2j9WHukFBWrSUcKYDEOhpmzjxFq
                    </td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline flex"
                      >
                        <div className="flex">
                          <a href="/editu">
                            <div>
                              <TbEdit size={20} />
                            </div>
                          </a>
                          <a href="">
                            <div className="ml-5">
                              {" "}
                              <RiDeleteBinLine size={20} />
                            </div>
                          </a>
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Farizah
                    </th>
                    <td class="px-6 py-4">farhanafarizah@gmail.com</td>
                    <td class="px-6 py-4">-</td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline flex"
                      >
                        <div className="flex">
                          <a href="/editu">
                            <div>
                              <TbEdit size={20} />
                            </div>
                          </a>
                          <a href="">
                            <div className="ml-5">
                              {" "}
                              <RiDeleteBinLine size={20} />
                            </div>
                          </a>
                        </div>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      {showModal && (
        <div className="fixed z-2 inset-0 overflow bg-gray-500 bg-opacity-75">
          <div className="flex items-center justify-center  min-h-screen">
            <div className="bg-white rounded-lg p-8 ml-20 w-5/12 max-w-4xl">
              <h1 className="text-xl font-semibold">Tambah user Baru</h1>
              <hr className="my-3 border-t-2 border-gray-500" />
              <form onSubmit={handleSubmit} className="mb-4 md:grid-cols-2">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nama User
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nama_User"
                    type="text"
                    placeholder="nama_user"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Username"
                    type="text"
                    placeholder="username"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="text"
                    placeholder="Password"
                    required
                  />
                </div>
              </form>
              <div className="flex items-center justify-between mt-6">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={closeModal}
                >
                  Tutup
                </button>
                <button
                  className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
