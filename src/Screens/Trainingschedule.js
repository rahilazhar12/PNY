import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trainingschedule = () => {
  const [batches, setBatches] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);

  useEffect(() => {
    axios.get('https://lms.pnytraining.com/api/trainingSchedules?type=month&duration=2')
      .then(response => {
        setBatches(response.data.Batches);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setSelectedDivision(null); // Reset division selection when a new city is selected
  };

  const handleDivisionClick = (division) => {
    setSelectedDivision(division);
  };

  const getDivisions = (cityBatches) => {
    const divisions = new Set();
    cityBatches.forEach(batch => {
      if (batch.branch && batch.branch.DivisionName) {
        divisions.add(batch.branch.DivisionName);
      }
    });
    return Array.from(divisions);
  };

  return (
    <div>
      <h2>Select a City</h2>
      <div>
        {Object.keys(batches).map(city => (
          <button key={city} onClick={() => handleCityClick(city)}>
            {city}
          </button>
        ))}
      </div>

      {selectedCity && batches[selectedCity] && (
        <>
          <h3>{selectedCity}</h3>
          <h4>Select a Division</h4>
          <div>
            {getDivisions(batches[selectedCity]).map(division => (
              <button key={division} onClick={() => handleDivisionClick(division)}>
                {division}
              </button>
            ))}
          </div>

          {batches[selectedCity].filter(batch => !selectedDivision || (batch.branch && batch.branch.DivisionName === selectedDivision)).map(batch => (
            <div key={batch.id}>
              <h4>{batch.courseName}</h4>
              <p>Session: {batch.session}</p>
              <p>Start Date: {batch.start_date}</p>
              <p>End Date: {batch.end_date}</p>
              {/* Render other batch details as needed */}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Trainingschedule;
