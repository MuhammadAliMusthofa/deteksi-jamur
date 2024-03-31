import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MushroomDetailPage = () => {
   const [mushroom, setMushroom] = useState(null);
   const [predict, setPredict] = useState(null);
   const { name } = useParams();

   useEffect(() => {
      fetchMushroomDetail();
   }, []);
   const accessToken = sessionStorage.getItem("access_token");

   const fetchMushroomDetail = async () => {
      try {
         const response = await fetch(
            `http://127.0.0.1:5000/user-mushroom/${name}`,
            {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${accessToken}`,
               },
            }
         );

         const data = await response.json();
         console.log(data);
         if (response.ok) {
            setMushroom(data.data);
         } else {
            console.error("Failed to fetch mushroom detail:", data.message);
         }
      } catch (error) {
         console.error("Error fetching mushroom detail:", error);
      }
   };

   const fetchPredict = async () => {
      try {
         const response = await fetch(
            `http://127.0.0.1:5000/predict-mushroom`,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${accessToken}`,
               },
               body: JSON.stringify({ image_name: name }), // Mengirim data JSON dengan format yang benar
            }
         );

         const data = await response.json();
         //  console.log(data);
         if (response.ok) {
            setPredict(data.data);
         } else {
            console.error("Failed to fetch mushroom prediction:", data.message);
         }
      } catch (error) {
         console.error("Error fetching mushroom prediction:", error);
      }
   };

   return (
      <div>
         {mushroom ? (
            <section id="about" className="pt-36 pb-32 bg-slate-100">
               <div className="container">
                  <div className="flex flex-wrap justify-center">
                     <div className="w-full px-4 mb-10 lg:w-1/3">
                        <img
                           src={mushroom?.path}
                           alt="Jamur Hasil"
                           className="rounded-lg"
                        />
                     </div>
                     <div className="w-full px-4 lg:w-1/2">
                        <div className="max-w-full mx-auto text-start mb-16">
                           <h4 className="font-semibold text-lg text-primary mb-2">
                              Jamur Ditemukan
                           </h4>
                           <h2 className="font-bold text-saildark text-3xl mb-4">
                              {mushroom?.name.replace(/_/g, " ")}
                           </h2>
                           <p className="font-medium text-md text-secondary mb-4">
                              {mushroom?.type}
                           </p>
                           <p className="font-medium text-md text-saildark">
                              <span className="font-bold">Nama Latin : </span>
                              {predict ? predict?.name : "loading..."}
                           </p>
                           <p className="font-medium text-md text-saildark">
                              <span className="font-bold">Deskripsi: </span>
                              {predict ? predict?.deskripsi : "loading..."}
                           </p>
                           <p className="font-medium text-md text-saildark">
                              <span className="font-bold">Nutrisi :</span>
                              <li>
                                 <span className="font-bold text-saildark">
                                    Kalori :
                                 </span>{" "}
                                 {mushroom?.kalori ? mushroom?.kalori : "N/A"}
                              </li>
                              <li>
                                 <span className="font-bold text-saildark">
                                    Protein :
                                 </span>{" "}
                                 {predict ? predict?.content.protein : "N/A"}
                              </li>
                              <li>
                                 <span className="font-bold text-saildark">
                                    Vitamin :
                                 </span>{" "}
                                 {predict ? predict?.content.vitamin : "N/A"}
                              </li>
                              <li className="mb-4">
                                 <span className="font-bold text-saildark">
                                    Mineral :
                                 </span>{" "}
                                 {predict ? predict?.content.mineral : "N/A"}
                              </li>
                              <li className="mb-4">
                                 <span className="font-bold text-saildark">
                                    Toksisitas :
                                 </span>{" "}
                                 {predict?.content.toksisitas
                                    ? predict?.content.toksisitas
                                    : "N/A"}
                              </li>
                              <li className="mb-4">
                                 <span className="font-bold text-saildark">
                                    Gejala :
                                 </span>{" "}
                                 {predict?.content.gejala
                                    ? predict?.content.gejala
                                    : "N/A"}
                              </li>
                           </p>
                           <Link
                              to="/dashboard"
                              onClick={fetchPredict}
                              className="h-full rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
                           >
                              Scan Jamur Lagi
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         ) : (
            <p>Loading...</p>
         )}
      </div>
   );
};

export default MushroomDetailPage;
