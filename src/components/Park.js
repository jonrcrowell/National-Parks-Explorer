import React from 'react'
import styled from 'styled-components'

function Park(props) {
    return (
        <div style={{ fontSize: ".5em", width: "450px", textAlign: "left", border: "solid 1px white", borderRadius: ".25em", padding: "2em" }}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.directionsInfo}</p>
            <p>{props.latLong}</p>
            <p>{props.weatherInfo}</p>
        </div>
    )
}

export default Park;