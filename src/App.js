import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
        <button onClick={e => updateParkState('la')}>LA</button>
        <button onClick={e => updateParkState('ok')}>OK</button>
        <button onClick={e => updateParkState('tx')}>TX</button>
        <button onClick={e => updateParkState('nm')}>NM</button>
        <button onClick={e => updateParkState('ak')}>AK</button>
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
