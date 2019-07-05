import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import stateAbbreviations from './stateAbbreviations'
import Button from './components/Button'
import Ul from './components/Ul'

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
    updateParks(null);
    updateParkState(ab);
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
        <Ul>
          To Do List:
          <li style={{ textDecoration: "line-through" }}>Display a list of parks for a given state</li>
          <li>Create a styled "park" card and display search results with a grid of cards</li>
          <li>Add routes</li>
          <li>Add navigation</li>
          <li>Indicate active state button</li>
          <li>Display the events for a park</li>
          <li>Display the lesson plans for a park</li>
          <li>Display visitor center information for a park</li>
          <li>Display campground information for a park</li>
          <li>Use Theme UI to style the site</li>
          <li>Allow user to specify "favorite" parks</li>
          <li>Create view for favorited parks</li>
        </Ul>
        <p>Show Me The Parks In {parkState.toUpperCase()}</p>
        <div className="parent">
          {stateAbbreviations.map(ab => <Button active={false} key={ab} onClick={e => handleParkStateClick(e, ab)}>{ab}</Button>)}
        </div>
        {!parks ? (
          <p>Searching for parks...</p>
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
                  <th>Weather Tips</th>
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
                        <td>{weatherInfo}</td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          )}
      </header>
    </div >
  );
}

export default App;
