import React from "react";
import Sidebar from "../component/sidebar";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

const Even = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <div className="ml-72 mt-20">
          <div className="pr-5 mt-10">
            <h2 className="font-semibold text-xl text-center">DATA EVENT</h2>
            <div className="text-end">
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
              >
                <a href="/inpute">
                  Tambahkan Data Baru{" "}
                  <span className="font-bold bg-[#413E54] text-white p-1 px-2 rounded-full ml-2">
                    +
                  </span>
                </a>
              </button>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Nama Acara
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Deskripsi
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Gambar
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Tanggal
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Lokasi
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Penyelenggara
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
                      Donor Darah: Dinas Ketahanan
                    </th>
                    <td class="px-6 py-4">
                      Kegiatan Donor Darah dilingkungan Kantor Pertanahan Kota
                      Palangka Raya. Kegiatan ini dilaksanakan kerjasama dengan
                      Palang Merah Indonesia Kota Palangka Raya dalam rangka
                      meningkatkan kesehatan dan membantu sesama serta
                      berpartisipasi dalam pemenuhan kebutuhan darah di Kota
                      Palangka Raya.
                    </td>
                    <td class="px-6 py-4">gambar.jpg</td>
                    <td class="px-6 py-4">Sabtu, 8 September</td>
                    <td class="px-6 py-4">
                      Kantor Pertahanan Kota Palangka Raya
                    </td>
                    <td class="px-6 py-4">Dinas Ketahanan</td>
                    <td class="px-6 py-4 text-right">
                      <div
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline flex"
                      >
                        <div className="flex">
                          <a href="/edite">
                            <div>
                              <TbEdit size={20} />
                            </div>
                          </a>
                          <a href="hapusd">
                            <div className="ml-5">
                              {" "}
                              <RiDeleteBinLine size={20} />
                            </div>
                          </a>
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
    </div>
  );
};

export default Even;
