import React, { useEffect, useState } from 'react';
import './searchModal.css';

export const SearchModal = ({ isOpen, onClose, onLocationChange,location,setLocation, guest, setGuest}) => {
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [adults, setAdults] = useState(0);
  const [data, setData] = useState([]);
  const [children, setChildren] = useState(0)

  const getData = async () => {
    const rs = await fetch('./src/assets/stays.json');
    const jsonRs = await rs.json();
    setData(jsonRs);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(()=> {
    const sum = adults + children
    setGuest(sum)
  },[adults, children])

  if (!isOpen) {
    return null;
  }

  const handleGuestsClick = () => {
    setShowGuestOptions(true);
  };

  const handleLocationClick = () => {
    setShowGuestOptions(false);
  };

  const handleLocationSelect = (location) => {
    setLocation(location);
  };

  const handleSearchClick = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" >
      <div className="modal-content" >
        <div className="modal-header">
          <div className="search1-bar">
            <div className="search-location" onClick={handleLocationClick}>
              <label htmlFor="location-input" className="label1">LOCATION</label>
              <input
                className="location-input"
                type="text"
                id="location-input"
                placeholder="Add location"
                value={location} //Es lo que lleva dentro
                onChange={(e) => setLocation(e.target.value)}
                
              />
            </div>
            <div className="search-guests" onClick={handleGuestsClick}>
              <label className="labelG">GUESTS</label>
              <input
                type="text"
                placeholder="Add guests"
                className="inputGuests"
                onChange={handleLocationClick}
                value={guest}
              />
            </div>
            <button className="search1-button" onClick={handleSearchClick}>
              <i className="search-icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </i>
              Search
            </button>
          </div>
        </div>
        <div className="modal-body">
          {showGuestOptions ? (
            <div className="guests-details">
              <div className="adults">
                <label className="adults1">
                  <strong>Adults</strong> <br />
                  <small className="small"> Ages 13 or above</small>
                </label>
                <div className="guest-counter">
                  <button
                    className="b1"
                    onClick={() => setAdults(adults - 1)}
                    disabled={adults <= 0}
                    
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button className="b2" onClick={() => setAdults(adults + 1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="children">
                <label className="children1">
                  <strong>Children</strong> <br />
                  <small>Ages 2-12</small>
                </label>
                <div className="guest-counter">
                  <button
                    className="b1"
                    onClick={() => setChildren(children - 1)}
                    disabled={children <= 0}
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button
                    className="b2"
                    onClick={() => setChildren(children + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <ul className="location-list">
              <li onClick={() => handleLocationSelect('Helsinki, Finland')}>
                <span>
                  <img src="/marcador.png" alt="location-icon" />
                </span>
                Helsinki, Finland
              </li>
              <li onClick={() => handleLocationSelect('Turku, Finland')}>
                <span>
                  <img src="/marcador.png" alt="location-icon" />
                </span>
                Turku, Finland
              </li>
              <li onClick={() => handleLocationSelect('Oulu, Finland')}>
                <span>
                  <img src="/marcador.png" alt="location-icon" />
                </span>
                Oulu, Finland
              </li>
              <li onClick={() => handleLocationSelect('Vaasa, Finland')}>
                <span>
                  <img src="/marcador.png" alt="location-icon" />
                </span>
                Vaasa, Finland
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};