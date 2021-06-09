import "./App.css";
import States from "./components/StateDetail";
import { useState, useEffect } from "react";
import Outer from "./components/Outer";
import Steps from "./components/Steps";
function App() {
  const [stateId, setStateId] = useState(0);
  const [Districts, setDistricts] = useState(null);
  const [districtId, setDistrictId] = useState(0);
  const [data, setData] = useState(false);
  const [date, setDate] = useState(formatDate(new Date().toDateString()));
  const [hospitals, setHospitals] = useState(null);
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    fetch(
      `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setDistricts(data);
        setData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stateId]);
  useEffect(() => {
    fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${GetFormatedDate(
        date
      )}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((hospitals) => {
        setHospitals(hospitals);
      })
      .catch((err) => console.log(err));
  }, [districtId, date]);
  function GetFormatedDate(datePickerID) {
    let rawDate = datePickerID; // Get the Raw Date
    return rawDate.split("-").reverse().join("-"); // Reverse the date
  }

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  return (
    <div className="App">
      {/* heading */}
      <div className="App__header">
        <h1 className="App__heading">Know-Vacs</h1>
        {/* description */}
        <p className="App__description">
          Here you can find nearby covid vaccine center and details releated to
        </p>
        <p className="App__description">
          vaccine from the date you choose to upcoming next 7 days.
        </p>
      </div>
      {/* searching */}
      <h1 className="App__search">
        <i className="fas fa-search"></i>
      </h1>
      <form className="App__form" method="get">
        <select
          className="App__dropdown"
          name="state_id"
          onChange={(e) => setStateId(e.target.value)}
          id="states"
        >
          <option value="state">Select state</option>
          {States.map((state, id) => {
            return (
              <option key={id} value={state.state_id}>
                {state.state_name}
              </option>
            );
          })}
        </select>

        <select
          className="App__dropdown"
          name="district_id"
          onChange={(e) => setDistrictId(e.target.value)}
          id="distict"
        >
          <option value="districts">Select District</option>
          {data &&
            Districts.districts.map((district, id) => {
              return (
                <option key={id} value={district.district_id}>
                  {district.district_name}
                </option>
              );
            })}
        </select>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="date"
        ></input>
        <button className="btn" type="button" onClick={() => setSubmit(true)}>
          Search
        </button>
      </form>
      {/* result */}
      {submit ? (
        hospitals.centers.map((hospital, id) => {
          return (
            <Outer
              key={id}
              hospitalName={hospital.name}
              hospitalAdress={hospital.address}
              sessions={hospital.sessions}
            />
          );
        })
      ) : (
        <Steps />
      )}
    </div>
  );
}

export default App;
