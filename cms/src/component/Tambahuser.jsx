import React from "react";

const Tambahuser = () => {
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
      <button
        onClick={openModal}
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">
        <span>
          Tambahkan Data Baru
          <span className="font-bold bg-[#413E54] text-white p-1 px-2 rounded-full ml-2">
            +
          </span>
        </span>
      </button>
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
                className="mb-4 md:grid-cols-2">
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
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={closeModal}>
                  Tutup
                </button>
                <button
                  className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
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

export default Tambahuser;
