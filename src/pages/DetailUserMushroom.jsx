import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserMushroomDetailPage = () => {
  const [mushroom, setMushroom] = useState(null);
  const { id, name } = useParams();

  useEffect(() => {
    fetchMushroomDetail();
  }, []);

  const fetchMushroomDetail = async () => {
    try {
      const response = await fetch(`http://mymushroom.my.id/mushroom/${name}`);
      const data = await response.json();
      if (response.ok) {
        setMushroom(data.data);
      } else {
        console.error("Failed to fetch mushroom detail:", data.message);
      }
    } catch (error) {
      console.error("Error fetching mushroom detail:", error);
    }
  };

  return (
    <div>
      {mushroom ? (
        <section id="about" className="pt-96 pb-32 bg-slate-100">
          <div className="container">
            <p>ID: {id}</p>
            <p>Name: {name}</p>
          </div>
        </section>
      ) : (
        <div className="pt-96 pb-32 bg-slate-100">
          <p>ID: {id}</p>
          <p>Name: {name}</p>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default UserMushroomDetailPage;
