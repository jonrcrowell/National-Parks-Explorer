import React from 'react'
import Ul from './Ul'

const Tasks = () => (
    <div>
        <h2>Stuff I want to add to the site</h2>
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
            <li style={{ textDecoration: "line-through" }}>Create a styled "park" card and display search results with a grid of cards</li>
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
    </div>
);

export default Tasks;