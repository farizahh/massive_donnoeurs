import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import Delete from "../component/Delete";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

const Darah = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

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
            <h2 className="font-semibold text-xl text-center">DATA DARAH</h2>
            <div className="text-end">
              <button
                onClick={openModal}
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
              >
                <span>
                  Tambahkan Data Baru{" "}
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
                      NIK
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Nomor
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Golongan
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Tanggal Donor
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
                      Akbar Nugraha Dimyati
                    </th>
                    <td class="px-6 py-4">1234567890123</td>
                    <td class="px-6 py-4">081234567890123</td>
                    <td class="px-6 py-4 text-center">B+</td>
                    <td class="px-6 py-4 text-center">05-Des,2023</td>
                    <td class="px-6 py-4 text-right">
                      <div
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline flex"
                      >
                        <div className="flex">
                          <a href="/editd">
                            <div>
                              <TbEdit size={20} />
                            </div>
                          </a>
                          <div onClick={openDeleteModal}>
                            <div className="ml-5">
                              <RiDeleteBinLine size={20} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      {isDeleteModalOpen && (
        <Delete onDelete={handleDelete} onCancel={handleCancel} />
      )}
      {showModal && (
        <div className="fixed z-2 inset-0 overflow bg-gray-500 bg-opacity-75">
          <div className="flex items-center justify-end  min-h-screen">
            <div className="bg-white rounded-lg p-8 mr-16 w-9/12 max-w-4xl">
              <h1 className="text-xl font-semibold">
                Tambah Data Baru Donor Darah
              </h1>
              <hr className="my-3 border-t-2 border-gray-500" />
              <form
                onSubmit={handleSubmit}
                className="grid gap-2 mb-4 md:grid-cols-2"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nama Pengguna
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nama_pengguna"
                    type="text"
                    placeholder="nama_pengguna"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nomor Pengguna
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nomor_pengguna"
                    type="text"
                    placeholder="nomor_pengguna"
                    name="nomor_pengguna"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    NIK Pengguna
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nik_pengguna"
                    type="text"
                    placeholder="nik_pengguna"
                    name="nik_pengguna"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Golongan Pengguna
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="golongan_pengguna"
                    type="text"
                    placeholder="golongan_pengguna"
                    name="golongan_pengguna"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    ID Pengguna
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id_pengguna"
                    type="text"
                    placeholder="id_pengguna"
                    name="id_pengguna"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tanggal Donor
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="tanggal_donor"
                    type="date"
                    placeholder="tanggal_donor"
                    name="tanggal_donor"
                    required
                  />
                </div>
              </form>
              <div className="flex items-center justify-between">
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

export default Darah;
