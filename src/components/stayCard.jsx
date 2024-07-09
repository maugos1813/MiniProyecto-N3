import React from "react";

export const StayCard = ({stay}) => {
    return(
        <div className="stay-card">
            <img src={stay.photo} alt={stay.title} />
            <div className="stay-info">
                <div className="stay-type">
                    {stay.superHost === true && <span className="superhost">Super Host</span>}
                    <span>{stay.type}</span>
                    {stay.beds && <span> · {stay.beds} beds</span>}
                </div>
                <div className="stay-rating">
                    <img className="star" src="/estrella1.png" alt="Star Icon" />
                    <span>{stay.rating}</span>
                </div>
            </div>
            <h2>{stay.title}</h2>
        </div>
    )
}