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
`

const ParkLayout = styled.div`
    display: grid; 
    grid-template-columns: 1fr 2fr; 
    grid-template-rows: 1fr; 
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
`

function Explore() {
    const [parkState, updateParkState] = useState("tx");
    const [parks, updateParks] = useState(null);

    useEffect(() => {
        const parksUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${parkState}&api_key=${
            process.env.REACT_APP_API_KEY
            }`;
        axios.get(parksUrl).then(response => {
            updateParks(response.data.data);
        });
    }, [parkState]);

    function handleParkStateClick(e, ab) {
        updateParks(null);
        updateParkState(ab);
    }

    return (
        <div>
            <div className="App">
                <header className="App-header">


                    <div className="parent">
                        {stateAbbreviations.map(ab => <Button active={false} key={ab} onClick={e => handleParkStateClick(e, ab)}>{ab}</Button>)}
                    </div>
                    {!parks ? (
                        <p>Searching for parks...</p>
                    ) : (
                            // replace park grid with details for the selected park
                            // highlight the selected park and have an arrow pointing to the detail
                            // Need to put the list of parks in a scrollable section so that clicking
                            // one will always display the park's details to the right so that the use
                            // doesn't have to scroll around to see what they've picked
                            <div>
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
                                                    ></ParkTitle>
                                                )
                                        )}
                                    </div>
                                    {/* Replace all parks with selected park */}
                                    <div>
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
                                                    <Park key={id}
                                                        description={description}
                                                        designation={designation}
                                                        directionsInfo={directionsInfo}
                                                        directionsUrl={directionsUrl}
                                                        fullName={fullName}
                                                        latLong={latLong}
                                                        name={name}
                                                        parkCode={parkCode}
                                                        states={states}
                                                        url={url}
                                                        weatherInfo={weatherInfo}
                                                    ></Park>
                                                )
                                        )[0]}
                                    </div>
                                </ParkLayout>
                            </div>
                        )}
                </header>
            </div >
        </div>
    );
}

export default Explore;