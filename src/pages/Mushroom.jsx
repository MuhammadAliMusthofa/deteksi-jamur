import React, { useState, useEffect } from 'react';

function MushroomClassifier() {
  const [selectedMushroom, setSelectedMushroom] = useState(null);
  const [mushrooms, setMushrooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://mymushroom.my.id/mushroom')
      .then(response => response.json())
      .then(data => {
        setMushrooms(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching mushrooms:', error);
        setLoading(false);
      });
  }, []);

  const handleMushroomSelect = (mushroomId) => {
    const mushroom = mushrooms.find(mushroom => mushroom.id === mushroomId);
    setSelectedMushroom(mushroom);
  };

  return (
    <div>
      <h2>Select a mushroom:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {mushrooms.map(mushroom => (
              <tr key={mushroom.id} onClick={() => handleMushroomSelect(mushroom.id)}>
                <td>{mushroom.id}</td>
                <td>{mushroom.name}</td>
                <td>{mushroom.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {selectedMushroom && (
        <div>
          <h2>Selected Mushroom:</h2>
          <p>Name: {selectedMushroom.name}</p>
          <p>Type: {selectedMushroom.type}</p>
        </div>
      )}
    </div>
  );
}

export default MushroomClassifier;
