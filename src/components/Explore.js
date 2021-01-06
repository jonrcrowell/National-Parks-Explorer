import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "../App.css";
import stateAbbreviations from "../stateAbbreviations";
import Button from "./Button";
import Park from "./Park";
import ParkTitle from "./ParkTitle";

const Title = styled.p`
  text-align: left;
  font-size: 0.5em;
  font-weight: 700;
`;

const ParkLayout = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
`;

function Explore() {
  const [parkState, setParkState] = useState("TX");
  const [parks, setParks] = useState(null);
  const [park, setPark] = useState({
    id: 1,
    name: "Pick a Park",
    description:
      "Click on any of the parks in the list to the left for more details.",
  });

  useEffect(() => {
    const parksUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${parkState}&api_key=${process.env.REACT_APP_API_KEY}`;

    let parksData = null;

    axios
      .get(parksUrl)
      .then((response) => {
        parksData = response.data.data;
        setParks(parksData);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [parkState]);

  function handleParkStateClick(abbreviation) {
    setParks(null);
    setParkState(abbreviation);
    setPark({
      id: 1,
      name: "Pick a Park",
      description:
        "Click on any of the parks in the list to the left for more details.",
    });
  }

  function handleParkClick(e, name) {
    setPark(parks.filter((x) => x.name === name)[0]);
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="parent">
            {stateAbbreviations.map((ab) => (
              <Button
                active={ab === parkState}
                key={ab}
                onClick={(e) => handleParkStateClick(ab)}
              >
                {ab}
              </Button>
            ))}
          </div>
          {!parks ? (
            <p>Searching for parks...</p>
          ) : (
            <div>
              <Title>
                There are {parks.length} National Parks in{" "}
                {parkState.toUpperCase()}
              </Title>
              <ParkLayout className="parklayout">
                <div className="parkList">
                  {parks.map(({ id, name, designation }) => (
                    // TODO added on 8/22/2019 by Jon: highlight the selected park and have an arrow pointing to the detail
                    // TODO Need to put the list of parks in a scrollable section so that clicking
                    // TODO one will always display the park's details to the right so that the use
                    // TODO doesn't have to scroll around to see what they've picked
                    <ParkTitle
                      key={id}
                      name={name}
                      designation={designation}
                      onClick={(e) => handleParkClick(e, name)}
                    ></ParkTitle>
                  ))}
                </div>
                <div>
                  <Park
                    key={park.id}
                    description={park.description}
                    designation={park.designation}
                    directionsInfo={park.directionsInfo}
                    directionsUrl={park.directionsUrl}
                    fullName={park.fullName}
                    latLong={park.latLong}
                    name={park.name}
                    parkCode={park.parkCode}
                    states={park.states}
                    url={park.url}
                    weatherInfo={park.weatherInfo}
                  ></Park>
                </div>
              </ParkLayout>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}

export default Explore;
