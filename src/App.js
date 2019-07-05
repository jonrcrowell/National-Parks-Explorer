import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import stateAbbreviations from './stateAbbreviations'

function App() {
  const [parkState, updateParkState] = useState("tx");
  const [parks, updateParks] = useState(null);

  useEffect(() => {
    const parksUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${parkState}&api_key=${
      process.env.REACT_APP_API_KEY
      }`;
    console.log(parksUrl);
    axios.get(parksUrl).then(response => {
      updateParks(response.data.data);
    });
  }, [parkState]);

  function handleParkStateClick(e, ab) {
    // need to update park state
    // set button clicked to active
    console.log(e.target);
    updateParkState(ab);
    // onClick={e => updateParkState(ab)}>{ab}</button>)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Explore our National Parks through the data they provide</p>
        <a
          className="App-link"
          href="https://www.nps.gov/subjects/developer/api-documentation.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          National Park Service API Documentation
        </a>
        <ul>
          {" "}
          To Do List:
          <li>Display a list of parks for a given state</li>
          <li>Display the events for a park</li>
          <li>Display the lesson plans for a park</li>
          <li>Display visitor center information for a park</li>
          <li>Display campground information for a park</li>
          <li>Use Theme UI to style the site</li>
        </ul>
        <p>Show Me The Parks In {parkState.toUpperCase()}</p>
        <div className="parent">
          {stateAbbreviations.map(ab => <button key={ab} onClick={e => handleParkStateClick(e, ab)}>{ab}</button>)}
        </div>
        {!parks ? (
          <p>Select a state to find parks to explore...</p>
        ) : (
            <table
              style={{
                marginBottom: "7px",
                fontSize: "14px",
                border: "2",
                textAlign: "left"
              }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Directions</th>
                  <th>Lat Long</th>
                </tr>
              </thead>
              <tbody>
                {parks.map(
                  ({
                    id,
                    description,
                    designation,
                    directionsInfo,
                    directionsUrl,
                    fullName,
                    latLong,
                    name,
                    parkCode,
                    states,
                    url,
                    weatherInfo
                  }) => (
                      <tr key={id}>
                        <td>{name}</td>
                        <td>{description}</td>
                        <td>{directionsInfo}</td>
                        <td>{latLong}</td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          )}
      </header>
    </div>
  );
}

export default App;
