import React from 'react'
import styled from 'styled-components'

const ParkCard = styled.div`
    font-size: .5em;
    width: 20vw;
    text-align: left;
    border: solid 1px #E2E8F0;
    border-radius: .25em;
    padding: 2em;
    background-color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

function Park({
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
}) {
    return (
        <ParkCard>
            <h3>{name}</h3>
            <p>{designation}</p>
            <p>{description}</p>
            <p>{directionsInfo}</p>
            <p>{latLong}</p>
            <p>{weatherInfo}</p>
            <a href={url} > {name}</a >
        </ParkCard >
    )
}

export default Park;