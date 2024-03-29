import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Mushrooms = () => {
  const [edibleMushrooms, setEdibleMushrooms] = useState([]);
  const [inedibleMushrooms, setInedibleMushrooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMushrooms();
  }, []);

  const fetchMushrooms = async () => {
    try {
      const response = await fetch("http://mymushroom.my.id/mushroom");
      const data = await response.json();
      if (response.ok) {
        const edible = data.data.filter(mushroom => mushroom.type === "Edible");
        const inedible = data.data.filter(mushroom => mushroom.type === "inedible");
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

  const renderMushrooms = (mushrooms) => (
    mushrooms.map((mushroom) => (
      <div key={mushroom.id} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-3 group">
        <Link to={`/mushroom-detail/${encodeURIComponent(mushroom.name)}`}> {/* Link to detail page */}
          <div className="max-w-sm min-h-[500px] max-h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105 lg:font-semibold">
            <div className="relative">
              <img src={`/src/assets/img/${mushroom.type}/${mushroom.name}.jpg`} alt={mushroom.name} className="w-full max-h-[200px] overflow-hidden rounded-t-lg object-cover" />
            </div>
            <div className="px-6 py-4 p-4">
              <div className="text-dark text-2xl max-w-md">
                <p className="text-gray-700 text-base mb-2 text-center">
                  <span className={mushroom.type === "Edible" ? "font-bold text-primary" : "font-bold text-red-500"}>
                    {mushroom.type}
                  </span>
                </p>
                <h2 className="font-bold mb-4 lg:text-xl">{mushroom.name.replace(/_/g, ' ')}</h2>
              </div>
              <p className="text-gray-700 text-base mb-4 text-justify">
                <span className="font-bold">Deskripsi: </span>{mushroom.deskripsi}
              </p>
            </div>
          </div>
        </Link>
      </div>
    ))
  );

  return (
    <section id="" className="pt-36 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto text-center mb-2">
          <h4 className="font-semibold text-lg text-primary mb-2">Mushroom List</h4>
          <h2 className="font-bold text-saildark text-3xl mb-4">Mushroom List</h2>
        </div>
        <div className="max-w-full mx-auto text-center mb-6 mt-6">
          <h4 className="font-semibold text-2xl text-primary mb-2">Edible</h4>
        </div>
        <div className="py-8 flex flex-wrap justify-between">
          {loading ? (
            <p>Loading...</p>
          ) : (
            renderMushrooms(edibleMushrooms)
          )}
        </div>
        <div className="max-w-full mx-auto text-center mb-6 mt-6">
          <h4 className="font-semibold text-2xl text-red-600 mb-2">Inedible</h4>
        </div>
        <div className="py-8 flex flex-wrap justify-between">
          {loading ? (
            <p>Loading...</p>
          ) : (
            renderMushrooms(inedibleMushrooms)
          )}
        </div>
      </div>
    </section>
  );
}

export default Mushrooms;
  