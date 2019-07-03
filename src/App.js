import React from 'react';
import './App.css';

fetch(`https://developer.nps.gov/api/v1/parks?stateCode=tx&api_key=${process.env.REACT_APP_API_KEY}`)
  .then((res) => { return res.json() })
  .then((data) => {

    console.log(data)
    let result = `<h2> National Parks in Texas </h2>`;

    data.data.forEach((park) => {
      const {
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
      } = park
      result +=
        `<div>
             <p>${id}</p>
             <p>${description}</p>
             <p>${designation}</p>
             <p>${directionsInfo}</p>
             <p>${directionsUrl}</p>
             <p>${fullName}</p>
             <p>${latLong}</p>
             <p>${name}</p>
             <p>${parkCode}</p>
             <p>${states}</p>
             <p>${url}</p>
             <p>${weatherInfo}</p>
              </div>`;
    });
    console.log(result)
  })

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Explore our National Parks through the data they provide
        </p>
        <a
          className="App-link"
          href="https://www.nps.gov/subjects/developer/api-documentation.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          National Park Service API Documentation
        </a>
        <ul> To Do List:
          <li>Display a list of parks for a given state</li>
          <li>Display the events for a park</li>
          <li>Display the lesson plans for a park</li>
          <li>Display visitor center information for a park</li>
          <li>Display campground information for a park</li>
          <li>Use Theme UI to style the site</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
