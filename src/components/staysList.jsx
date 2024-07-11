import React, { useState, useEffect } from "react";
import stays from '../assets/stays.json';
import { StayCard } from "./stayCard";

export const StaysList = ({ locationFilter }) => {
  const [filteredStays, setFilteredStays] = useState([]);

  useEffect(() => {
    if (locationFilter) {
      setFilteredStays(stays.filter(stay => stay.city.toLowerCase().includes(locationFilter.toLowerCase())));
    } else {
      setFilteredStays(stays);
    }
  }, [locationFilter]);

  return (
    <div className="stays-list">
      <h1>Stays in Finland</h1>
      <div className="stays-container">
        {filteredStays.map((stay, index) => (
          <StayCard key={stay.id || index} stay={stay} />
        ))}
      </div>
    </div>
  );
};