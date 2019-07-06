import React from 'react'
import styled from 'styled-components'

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
        <div style={{
            fontSize: ".5em",
            width: "450px",
            textAlign: "left",
            border: "solid 1px white",
            borderRadius: ".25em",
            padding: "2em",
            backgroundColor: "hsl(172, 5%, 50%)"
        }}>
            <h3>{name}</h3>
            <p>{designation}</p>
            <p>{description}</p>
            <p>{directionsInfo}</p>
            <p>{latLong}</p>
            <p>{weatherInfo}</p>
            <a href={url} > {name}</a >
        </div >
    )
}

export default Park;