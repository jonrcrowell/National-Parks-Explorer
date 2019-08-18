import React from 'react'
import styled from 'styled-components'

const ParkCard = styled.div`
    display: flex;
    font-size: .35em;
    width: 30vw;
    text-align: left;
    border: solid 1px #E2E8F0;
    border-radius: .25em;
    padding: 1em;
    margin-bottom: 1em;
    background-color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`
const ParkName = styled.h3`
    color: #4A5568;
    margin-right: 10px;
`
const ParkDesignation = styled.h3`
    color: #A0AEC0;
`

function ParkTitle({

    designation,
    name
}) {
    return (
        <ParkCard>
            <ParkName>{name}</ParkName>
            <ParkDesignation>{designation}</ParkDesignation>
        </ParkCard >
    )
}

export default ParkTitle;