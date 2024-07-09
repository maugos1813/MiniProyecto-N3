import React, {useState, useEffect} from "react";
import stays from '../assets/stays.json'
import { StayCard } from "./stayCard";

export const StaysList = () => {
  const[data, setData] = useState([])
  
  const getData = async () => {
    const rs = await fetch('../assets/stays.json')
    const rsJson = await rs.json()
    setData(rsJson)
  }

  useEffect(()=>{
    getData
  }, [])


    return(
      <div className="stays-list">
        <h1>Stays in Finland</h1>
        <div className="stays-container">
          {stays.map(stay => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>
      </div>  
    )
}