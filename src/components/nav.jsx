import React from "react";

export const Header = ({setModalIsOpen}) => {
    return(
        <header>
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Location"/>
                <button onClick={() => setModalIsOpen(true)}>Add guests</button>
                <button className="search-button" onClick={()=> setModalIsOpen(true)}>
                    <i className="search-icon"><img src="/busqueda.png" alt="search-icon" /></i>
                </button>
            </div>
        </header>
    )
}