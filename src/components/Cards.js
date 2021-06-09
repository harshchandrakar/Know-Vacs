import React from "react";
import "./Card.css";

function Cards({ date, minAge, type, dose1, dose2, dose, slot }) {
  return (
    <div className="card">
      <h2>
        <strong>Date: {date}</strong>
      </h2>

      <p>Minimum Age: {minAge}</p>
      <p>Vaccine Name: {type}</p>
      <p>Total Dose: {dose} </p>
      <p>Dose 1 : {dose1}</p>
      <p>Dose 2 : {dose2}</p>
      <hr></hr>

      <div className="card__slot">
        <h4>
          <strong>Time Slots</strong>
        </h4>
        {slot.map((time, id) => (
          <p key={id}>{time}</p>
        ))}
      </div>
    </div>
  );
}

export default Cards;
