import React from "react";
import './searchModal.css'

export const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return(
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
            <div className="modal-header">
                <div className="search1-bar">
                    <div className="search-location">
                        <label htmlFor="location-input">Location</label>
                        <input id="location-input" type="text" placeholder="Helsinki, Finland" />
                    </div>
                    <div className="search-guests">
                        <label>Guests</label>
                        <input type="text" placeholder="Add guests" />
                    </div>
                    <button className="search-button">
                        <i className="search-icon"></i> Search
                    </button>
                </div>
            </div>
            <div className="modal-body">
                <ul className="location-list">
                    <li>Helsinki, Finland</li>
                    <li>Turku, Finland</li>
                    <li>Oulu, Finland</li>
                    <li>Vaasa, Finland</li>
                </ul>
            </div>
        </div>
    </div>
)
}


