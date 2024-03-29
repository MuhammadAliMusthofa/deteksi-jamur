import React, { useState } from "react";

const Dashboard = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
  });
  const [responseData, setResponseData] = useState(null); // State untuk menyimpan respons dari API



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const accessToken = sessionStorage.getItem("access_token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);

      const response = await fetch("http://mymushroom.my.id/user-mushroom", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json(); // Mengambil data respons dari API
        setResponseData(responseData); // Menyimpan data respons ke dalam state
        console.log("Data berhasil dikirim");
      } else {
        console.error("Gagal mengirim data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <section id="scanner" className="pt-36 pb-16 bg-slate-100">
        <div className="container max-w-screen-xl mx-auto">
          <div className="w-full px-4">
            <div className="max-w-full mx-auto text-center mb-2">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Mushroom Detector
              </h4>
              <h2 className="font-bold text-saildark text-3xl mb-4">
                Mushroom Detector
              </h2>
            </div>
            <div className="max-w-full mx-auto text-center mb-2 group">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                  <input
                    type="text"
                    name="name"
                    className="h-10 bg-gray-50 border border-gray-300 text-saildark text-sm text-center rounded-lg focus:ring-saildark focus:border-saildark block w-full p-2.5 lg:w-1/2 "
                    placeholder="Masukkan Nama File image"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>
                <div className="flex items-center justify-center lg:w-full lg:h-64 mt-6 bg-sailsem rounded-lg">
                 
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full lg:w-[98%] lg:h-[90%] border-2 border-red-950 border-dashed rounded-lg cursor-pointer bg-sailmed dark:hover:bg-bray-800 hover:bg-sailsem"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-white">
                          <span className="font-semibold">Detect Mushroom </span>{" "}
                        
                        </p>
                        
                      </div>
                      
                    </label>
                
                </div>
                <button
                  type="submit"
                  className="block mt-4 mx-auto px-6 py-3 rounded-lg bg-secondary text-red font-semibold focus:outline-none hover:bg-primary-dark transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
            {responseData && ( // Menampilkan respons data jika ada
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Response Data:</h3>
                <div>
                  <p>Name: {responseData.data.name}</p>
                  <p>Description: {responseData.data.deskripsi}</p>
                  <p>Type: {responseData.data.type}</p>
                  {/* Tambahkan lebih banyak informasi sesuai kebutuhan */}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
