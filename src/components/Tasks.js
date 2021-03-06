import React from "react";
import Ul from "./Ul";
import styled from "styled-components";

const Done = styled.li`
  text-decoration: line-through;
  color: #4a5568;
`;
const Page = styled.div`
  background-color: white;
  padding: 3rem;
`;

const Tasks = () => (
  <Page>
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
      <li>Display the events for a park</li>
      <li>Display the lesson plans for a park</li>
      <li>Display visitor center information for a park</li>
      <li>Display campground information for a park</li>
      <li>
        Use a Styled Comoponents' Theme Provider to set global style variables
        like border radius and colors
      </li>
      <li>Allow user to specify "favorite" parks</li>
      <li>Create view for favorited parks</li>
      <li>
        Consider storing data in my own db to speed up queries and update
        periodically with a service
      </li>
      <Done>Indicate active state button for default</Done>
      <Done>Integrate Logrocket</Done>
      <Done>Remove padding from NavBar</Done>
      <Done>Separate page content from nav bar</Done>
      <Done>Use Styled Components to style the site</Done>
      <Done>Display a list of parks for a given state</Done>
      <Done>
        Create a styled "park" card and display search results with a grid of
        cards
      </Done>
      <Done>Add routes</Done>
      <Done>Add navigation</Done>
    </Ul>
  </Page>
);

export default Tasks;
