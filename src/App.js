import React from 'react';
import './App.css';

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
