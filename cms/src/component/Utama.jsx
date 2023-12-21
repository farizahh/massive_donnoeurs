import React from "react";
import { FaCheck } from "react-icons/fa6";
import img from "../assets/img/p.jpeg";
import img2 from "../assets/img/2.jpeg";
import img3 from "../assets/img/3.jpeg";
import { MdArrowOutward } from "react-icons/md";

const Utama = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl text-center mb-5">DASHBOARD</h2>

      <div className="flex pr-8">
        <div className="bg-white rounded-lg p-5 pr-20">
          <h2 className="text-base text-gray-300 font-semibold">Statistik</h2>
          <p className="text-base font-semibold mt-3">Stok Darah: 50</p>

          <div className="mt-8">
            <div className="flex">
              <div>
                <h2 className="text-gray-400 text-base font-semibold">A :</h2>
                <p className="flex text-purple-500 font-semibold text-lg">
                  | <span className="text-black ml-3">8</span>
                </p>
              </div>
              <div className="ml-20">
                <h2 className="text-gray-400 text-base font-semibold">B :</h2>
                <p className="flex text-emerald-500 font-semibold text-lg">
                  | <span className="text-black ml-3">22</span>
                </p>
              </div>
            </div>

            <div className="flex mt-5">
              <div>
                <h2 className="text-gray-400 text-base font-semibold">AB :</h2>
                <p className="flex text-amber-500 font-semibold text-lg">
                  | <span className="text-black ml-3">2</span>
                </p>
              </div>
              <div className="ml-20">
                <h2 className="text-gray-400 text-base font-semibold">O :</h2>
                <p className="flex text-rose-500 font-semibold text-lg">
                  | <span className="text-black ml-3">18</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5  ml-5 w-full">
          <h2 className="text-base text-gray-300 font-semibold">Aktivitas</h2>
          <div className="flex mt-5">
            <div>
              <FaCheck />
            </div>
            <div className="ml-8 w-full">
              <p>task</p>
              <p className="bg-[#F3F2F7] p-1 px-3 rounded-lg font-semibold flex">
                tambahan event dari instansi xxx
                <span className="text-end ml-[42%] mt-1">
                  <MdArrowOutward />
                </span>
              </p>
            </div>
          </div>
          <div className="flex mt-5">
            <div>
              <img className="rounded-full" src={img} alt="" />
            </div>
            <div className="ml-3 w-full">
              <p className="text-[#9747FF] font-medium">
                Wiliam R. <span className="text-black">memberi anda tugas</span>
              </p>
              <p className="bg-[#F3F2F7] p-1 px-3 rounded-lg font-semibold flex">
                update data darah
                <span className="text-end ml-[65%] mt-1">
                  <MdArrowOutward />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 ml-5 text-center w-72">
          <h2 className="text-lg font-semibold">Total</h2>
          <p className="text-3xl text-[#9747FF] font-bold mt-8">180</p>
          <p className="font-semibold text-base mt-5">Tugas Selesai </p>
          <button
            type="button"
            class="flex bg-white border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-semibold rounded-full text-sm px-5 py-2 me-2 mb-2 mt-8 w-40"
          >
            <div className="mt-1 mr-5">
              <MdArrowOutward />
            </div>
            <p className="text-center">Tugas</p>
          </button>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-[413E54] font-semibold text-lg">Event</h2>
        <div className="flex mt-3">
          <div className="bg-white p-5 px-5 rounded-lg">
            <h2 className="font-semibold text-xl">Event 1</h2>
            <p className="font-medium text-sm">deskripsi singkat event 1</p>
            <p className="mt-20 font-medium text-base">
              Jumlah Pendaftar
              <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                25
              </span>
            </p>
            <div className="w-[181px] h-1.5 relative my-5">
              <div className="w-[46.46px] h-1.5 left-0 top-0 absolute bg-purple-500 rounded" />
            </div>
            <div className="flex">
              <div>
                <img className="rounded-full" src={img2} alt="" />
              </div>
              <div className="origin-top-left rotate-[25.99deg]">
                <img className="rounded-full" src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-white p-5 px-5 rounded-lg ml-5">
            <h2 className="font-semibold text-xl">Event 2</h2>
            <p className="font-medium text-sm">deskripsi singkat event 2</p>
            <p className="mt-20 font-medium text-base">
              Jumlah Pendaftar
              <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                25
              </span>
            </p>
            <div className="w-[181px] h-1.5 relative my-5">
              <div className="w-[46.46px] h-1.5 left-0 top-0 absolute bg-purple-500 rounded" />
            </div>
            <div className="flex">
              <div>
                <img className="rounded-full" src={img2} alt="" />
              </div>
              <div className="origin-top-left rotate-[25.99deg]">
                <img className="rounded-full" src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-white p-5 px-5 rounded-lg ml-5">
            <h2 className="font-semibold text-xl">Event 3</h2>
            <p className="font-medium text-sm">deskripsi singkat event 3</p>
            <p className="mt-20 font-medium text-base">
              Jumlah Pendaftar
              <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                25
              </span>
            </p>
            <div className="w-[181px] h-1.5 relative my-5">
              <div className="w-[46.46px] h-1.5 left-0 top-0 absolute bg-purple-500 rounded" />
            </div>
            <div className="flex">
              <div>
                <img className="rounded-full" src={img2} alt="" />
              </div>
              <div className="origin-top-left rotate-[25.99deg]">
                <img className="rounded-full" src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 ml-5 text-center mb-3">
            <h2 className="font-semibold text-lg">Total</h2>
            <p className="font-bold text-5xl text-[#9747FF] mt-10">9</p>
            <p className="font-semibold text-base mt-10">Event terdaftar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utama;
