import React from "react";
import "./Steps.css";

function Steps() {
  return (
    <div className="steps">
      <div className="steps__inner">
        <h1>How to search ?</h1>
        <br></br>
        <p>
          <strong>Step 1:</strong> Select state you belong.
        </p>
        <br></br>
        <p>
          <strong>Step 2:</strong> Select district you belong.
        </p>
        <br></br>
        <p>
          <strong>Step 3:</strong> Select from which you want to know details of
          next seven days.
        </p>
        <br></br>
        <p>
          <strong>Step 4: </strong>Select hospital if you have any specific
          choice.
        </p>
        <br></br>
        <p>
          <strong>Step 5: </strong>Click search and you are done!
        </p>
        <br></br>
      </div>
    </div>
  );
}

export default Steps;
