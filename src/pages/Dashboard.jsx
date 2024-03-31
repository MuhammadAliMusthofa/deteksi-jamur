import React, { useState } from "react";

const Dashboard = () => {
   const [imagePreview, setImagePreview] = useState(null);
   const [formData, setFormData] = useState({
      name: "",
      image: null,
   });

   // Fungsi untuk menampilkan pratinjau gambar saat gambar dipilih
   const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setImagePreview(reader.result);
         };
         reader.readAsDataURL(file);
         setFormData({ ...formData, image: file });
      }
   };

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const accessToken = sessionStorage.getItem("access_token");

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const formDataToSend = new FormData();
         formDataToSend.append("name", formData.name);
         formDataToSend.append("image", formData.image);

         const response = await fetch("http://127.0.0.1:5000/user-mushroom", {
            method: "POST",
            headers: {
               Authorization: `Bearer ${accessToken}`,
               // Jika diperlukan, tambahkan header authorization di sini
            },
            body: formDataToSend,
         });

         if (response.ok) {
            // Data berhasil dikirim, tambahkan logika yang sesuai di sini
            alert("data berhasil diinput");

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
         <section id="scanner" className="pt-36 pb-24 bg-slate-100">
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
                              placeholder="Masukkan Nama Jamur"
                              onChange={handleChange}
                              value={formData.name}
                              required
                           />
                        </div>
                        <div className="flex items-center justify-center lg:w-full lg:h-64 mt-6 bg-sailsem rounded-lg shadow-xl focus:outline-none transition duration-300 transform hover:scale-105">
                           {imagePreview ? (
                              <img
                                 src={imagePreview}
                                 alt="Preview"
                                 className="object-contain max-h-full max-w-full"
                                 style={{ width: "100%", height: "auto" }}
                              />
                           ) : (
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
                                       <span className="font-semibold">
                                          Click to upload
                                       </span>{" "}
                                       or drag and drop
                                    </p>
                                    <p className="text-xs text-white">
                                       SVG, PNG, JPG or GIF (MAX. 800x400px)
                                    </p>
                                 </div>
                                 <input
                                    name="image"
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                    onChange={handleImageChange}
                                 />
                              </label>
                           )}
                        </div>
                        <div className="mt-4">
                           <button
                              type="submit"
                              className="block mx-auto px-6 py-3 rounded-lg bg-sailsem text-white font-semibold focus:outline-none transition duration-300 transform hover:scale-105 hover:bg-sailmed shadow-lg"
                           >
                              Submit
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Dashboard;
