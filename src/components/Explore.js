import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import stateAbbreviations from '../stateAbbreviations'
import Button from './Button'
import Park from './Park'

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
                            <div>
                                <p style={{ textAlign: "left", fontSize: ".5em" }}>There are {parks.length} National Parks in {parkState.toUpperCase()}</p>
                                <div className="parkGrid">
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
                                    )}
                                </div>
                            </div>
                        )}
                </header>
            </div >
        </div>
    );
}

export default Explore;