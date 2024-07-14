import React, { useState, useEffect } from "react";
import { StayCard } from "./stayCard";

export const StaysList = ({ location, guest, searchResults}) => {

  const [filteredStays, setFilteredStays] = useState([]);

  const getData = async () => {
    const rs = await fetch('./src/assets/stays.json')
    const jsonRs = await rs.json()
    setFilteredStays(jsonRs)
  }
  
  useEffect(() => {
    getData()
  }, [])

useEffect(() => {
  const rs = searchResults.filter(m => {
    const combinedLocation = `${m.city}, ${m.country}`.toLowerCase();
    return combinedLocation.includes(location.toLowerCase());
  });
  setFilteredStays(rs);
}, [location]);

useEffect(()=>{
  const rs = searchResults.filter(m => {const maxGuests = m.maxGuests ? m.maxGuests.toString() : ""; 
    return maxGuests.toLowerCase().includes(guest.toString().toLowerCase())})
  setFilteredStays(rs)
},[guest])


  return (
    <div className="stays-list">
      <h1>Stays in Finland</h1>
      <div className="stays-container">
        {filteredStays &&
        filteredStays.map((stay, index) => (
          <StayCard key={stay.id || index} stay={stay} />
        ))}
      </div>
    </div>
  );
};