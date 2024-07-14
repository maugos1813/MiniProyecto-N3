import React, { useEffect, useState } from "react";

export const Header = ({ setModalIsOpen,location, guest }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const getData = async () => {
    const rs = await fetch('./src/assets/stays.json');
    const jsonRs = await rs.json();
    setData(jsonRs);
   
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const rs = data.filter(m => m.city.toLowerCase().includes(value.toLowerCase()));
    setData(rs);
  }, [value]);

  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          readOnly
          placeholder="Location"
          onClick={() => setModalIsOpen(true)}
          value={location} //Es lo que tiene dentro
        />
        <button onClick={() => setModalIsOpen(true)}> {`${guest === 0 ? 'Add guest' : guest}`}</button>
        <button className="search-button" onClick={() => setModalIsOpen(true)}>
          <i className="search-icon"><img src="/busqueda.png" alt="search-icon" /></i>
        </button>
      </div>
    </header>
  );
};