import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Mushrooms = () => {
   const [edibleMushrooms, setEdibleMushrooms] = useState([]);
   const [inedibleMushrooms, setInedibleMushrooms] = useState([]);
   const [userMushrooms, setUserMushrooms] = useState([]);
   const [loading, setLoading] = useState(true);
   const accessToken = sessionStorage.getItem("access_token");
   useEffect(() => {
      fetchMushrooms();
      fetchUserMushrooms();
   }, []);

   const fetchMushrooms = async () => {
      try {
         const response = await fetch("http://127.0.0.1:5000/mushroom");
         const data = await response.json();
         if (response.ok) {
            const edible = data.data.filter(
               (mushroom) => mushroom.type === "Edible"
            );
            const inedible = data.data.filter(
               (mushroom) => mushroom.type === "inedible"
            );
            setEdibleMushrooms(edible);
            setInedibleMushrooms(inedible);
         } else {
            console.error("Failed to fetch mushrooms:", data.message);
         }
         setLoading(false);
      } catch (error) {
         console.error("Error fetching mushrooms:", error);
         setLoading(false);
      }
   };

   const fetchUserMushrooms = async () => {
      try {
         const response = await fetch("http://127.0.0.1:5000/user-mushroom", {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${accessToken}`,
            },
         });
         const data = await response.json();
         if (response.ok) {
            setUserMushrooms(data.data);
         } else {
            console.error("Failed to fetch user mushrooms:", data.message);
         }
      } catch (error) {
         console.error("Error fetching user mushrooms:", error);
      }
   };

   const renderUserMushrooms = (mushrooms) => {
      return mushrooms.map((mushroom) => {
         return (
            // <div
            //    key={mushroom.id}
            //    className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 group"
            // >
            //    <Link
            //       to={`/mushroom-detail/${encodeURIComponent(mushroom.name)}`}
            //    >
            //       <img
            //          className="w-full h-48 object-fit rounded-t-lg"
            //          src={mushroom.path}
            //          alt="Sunset in the mountains"
            //       />
            //    </Link>
            //    <div className="px-6 py-4">
            //       <p className="text-gray-700 text-base mb-2 text-center">
            //          <span className="font-bold text-primary">
            //             {mushroom.name}
            //          </span>
            //       </p>
            //       <div className="font-bold text-center text-xl mb-2">
            //          {mushroom.jenis_jamur}
            //       </div>
            //       <p className="text-gray-700 text-base">
            //          {mushroom.description}
            //       </p>
            //    </div>
            // <div className="px-6 pt-4 pb-2">
            //    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            //       {mushroom.isEdible ? "Edible" : "Inedible"}
            //    </span>
            //    <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            //       {mushroom.jenis_jamur}
            //    </span>
            // </div>
            // </div>
            <div
               key={mushroom.id}
               className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 group"
            >
               {/* <Link to={`/mushroom-detail/${encodeURIComponent(mushroom.name)}`}> */}
               {/* {" "} */}
               {/* Link to detail page */}
               <div className="h-full rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105 lg:font-semibold flex flex-col">
                  <div className="relative flex-shrink-0 h-[200px]">
                     {" "}
                     {/* Set tinggi gambar */}
                     <Link
                        to={`/mushroom-detail/${encodeURIComponent(
                           mushroom.name
                        )}`}
                     >
                        <img
                           src={mushroom.path}
                           alt={mushroom.name}
                           className="w-full h-40 object-cover rounded-t-lg"
                        />
                     </Link>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                     <div className="text-dark text-2xl max-w-md">
                        <p className="text-gray-700 text-base mb-2 text-center">
                           <span className="font-bold text-primary">
                              {mushroom.name}
                           </span>
                        </p>
                        <h2 className="font-bold text-center mb-2 lg:text-lg line-clamp-2">
                           {" "}
                           {/* Batasi jumlah baris untuk judul */}
                           {mushroom.jenis_jamur}
                        </h2>
                     </div>
                     <div className="text-gray-700 text-base mb-4 text-justify overflow-hidden line-clamp-3">
                        {" "}
                        {/* Batasi jumlah baris untuk deskripsi */}
                        <span className="font-bold">
                           Deskripsi: <br />
                        </span>
                        {mushroom.description}
                     </div>
                     <div className="px-6 text-center pt-4 pb-2">
                        <span className=" inline-block bg-blue-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                           {mushroom.isEdible ? "Edible" : "Inedible"}
                        </span>
                        <span className="inline-block bg-green-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                           {mushroom.jenis_jamur}
                        </span>
                     </div>
                  </div>
               </div>

               {/* </Link> */}
            </div>
         );
      });
   };

   const renderMushrooms = (mushrooms) =>
      mushrooms.map((mushroom) => (
         <div
            key={mushroom.id}
            className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 group"
         >
            {/* <Link to={`/mushroom-detail/${encodeURIComponent(mushroom.name)}`}> */}
            {/* {" "} */}
            {/* Link to detail page */}
            <div className="h-full rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105 lg:font-semibold flex flex-col">
               <div className="relative flex-shrink-0 h-[200px]">
                  {" "}
                  {/* Set tinggi gambar */}
                  <img
                     src={`/src/assets/img/${mushroom.type}/${mushroom.name}.jpg`}
                     alt={mushroom.name}
                     className="w-full h-40 object-cover rounded-t-lg"
                  />
               </div>
               <div className="p-4 flex flex-col justify-between">
                  <div className="text-dark text-2xl max-w-md">
                     <p className="text-gray-700 text-base mb-2 text-center">
                        <span
                           className={
                              mushroom.type === "Edible"
                                 ? "font-bold text-primary"
                                 : "font-bold text-red-500"
                           }
                        >
                           {mushroom.type}
                        </span>
                     </p>
                     <h2 className="font-bold mb-2 lg:text-lg line-clamp-2">
                        {" "}
                        {/* Batasi jumlah baris untuk judul */}
                        {mushroom.name
                           .replace(/_/g, " ")
                           .toLowerCase()
                           .replace(/(?:^|\s)\S/g, function (a) {
                              return a.toUpperCase();
                           })}
                     </h2>
                  </div>
                  <div className="text-gray-700 text-base mb-4 text-justify overflow-hidden line-clamp-3">
                     {" "}
                     {/* Batasi jumlah baris untuk deskripsi */}
                     <span className="font-bold">Deskripsi: </span>
                     {mushroom.deskripsi}
                  </div>
               </div>
            </div>

            {/* </Link> */}
         </div>
      ));

   return (
      <section id="" className="pt-36 pb-32">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-full mx-auto text-center mb-2">
               <h4 className="font-semibold text-lg text-primary mb-2">
                  Mushroom List
               </h4>
               <h2 className="font-bold text-saildark text-3xl mb-4">
                  Mushroom List
               </h2>
            </div>
            <div className="py-8 flex flex-wrap justify-center">
               {loading ? (
                  <p>Loading...</p>
               ) : (
                  renderUserMushrooms(userMushrooms)
               )}
               {console.log(userMushrooms)}
            </div>
            {/* <div className="max-w-full mx-auto text-center mb-6 mt-6">
               <h4 className="font-semibold text-2xl text-primary mb-2">
                  Edible
               </h4>
            </div>
            <div className="py-8 flex flex-wrap justify-center">
               {loading ? <p>Loading...</p> : renderMushrooms(edibleMushrooms)}
            </div>
            <div className="max-w-full mx-auto text-center mb-6 mt-6">
               <h4 className="font-semibold text-2xl text-red-600 mb-2">
                  Inedible
               </h4>
            </div>
            <div className="py-8 flex flex-wrap justify-center">
               {loading ? (
                  <p>Loading...</p>
               ) : (
                  renderMushrooms(inedibleMushrooms)
               )}
            </div> */}
         </div>
      </section>
   );
};

export default Mushrooms;
