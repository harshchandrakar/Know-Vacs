import React from "react";
import Card from "./Cards";
import "./Outer.css";

function Outer({ hospitalName, hospitalAdress, sessions }) {
  return (
    <div className="outer">
      <h1 className="outer__heading">Hospital Name: {hospitalName}</h1>
      <h4 className="h4">
        <strong>Address</strong> : {hospitalAdress}
      </h4>
      {sessions.map((detail, id) => (
        <Card
          key={id}
          date={detail.date}
          minAge={detail.min_age_limit}
          type={detail.vaccine}
          dose1={detail.available_capacity_dose1}
          dose2={detail.available_capacity_dose2}
          dose={detail.available_capacity}
          slot={detail.slots}
        />
      ))}
      <hr></hr>
    </div>
  );
}

export default Outer;
