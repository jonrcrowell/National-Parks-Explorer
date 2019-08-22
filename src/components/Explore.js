import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'
import "../App.css";
import stateAbbreviations from '../stateAbbreviations'
import Button from './Button'
import Park from './Park'
import ParkTitle from "./ParkTitle";

const Title = styled.p`
    text-align: left;
    font-size: .5em;
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
    const [parkState, updateParkState] = useState("tx");
    const [parks, updateParks] = useState(null);
    const [park, updatePark] = useState({
        id: 1,
        name: 'Pick a Park',
        description: "Click on any of the parks in the list to the left for more details."
    });

    useEffect(() => {
        const parksUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${parkState}&api_key=${
            process.env.REACT_APP_API_KEY
            }`;
        axios.get(parksUrl).then(response => {
            updateParks(response.data.data);
        });
    }, [parkState]);

    function handleParkStateClick(e, abbreviation) {
        console.log(e)
        updateParks(null);
        updateParkState(abbreviation);
        updatePark({
            id: 1,
            name: 'Pick a Park',
            description: "Click on any of the parks in the list to the left for more details."
        })
    }

    function handleParkClick(e, name) {
        updatePark(parks.filter(x => x.name === name)[0]);
    }

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <div className="parent">
                        {stateAbbreviations.map(ab => <Button active={false} key={ab} onClick={e => handleParkStateClick(e, ab)}>{ab}</Button>)}
                    </div>
                    {!parks ? <p>Searching for parks...</p> : <div>
                        <Title>There are {parks.length} National Parks in {parkState.toUpperCase()}</Title>
                        <ParkLayout className="parklayout">
                            <div className="parkList">
                                {parks.map(
                                  ({
                                       id,
                                       name,
                                       designation
                                   }) => (
                                    <ParkTitle
                                      key={id}
                                      name={name}
                                      designation={designation}
                                      onClick={e => handleParkClick(e, name)}
                                    ></ParkTitle>
                                  )
                                )}
                            </div>
                            <div>
                                <Park key={park.id}
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
                    </div>}
                </header>
            </div >
        </div>
    );
}

export default Explore;