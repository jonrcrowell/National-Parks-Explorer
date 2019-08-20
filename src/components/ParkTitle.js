import React from 'react'
import styled from 'styled-components'

const ParkCard = styled.div`
    display: flex;
    font-size: .35em;
    cursor: pointer;
    width: 25vw;
    text-align: left;
    border: solid 1px #E2E8F0;
    border-radius: .25em;
    padding: 1em;
    margin-bottom: 1em;
    background-color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`
const ParkName = styled.span`
    color: #4A5568;
    margin-right: 5px;
    font-weight: 700;
`
const ParkDesignation = styled.span`
    color: #A0AEC0;
    font-weight: 400;
`

function ParkTitle({

    designation,
    name
}) {
    return (
        <ParkCard>
            <h3>
                <ParkName>{name}</ParkName>
                <ParkDesignation>{designation}</ParkDesignation>
            </h3>
        </ParkCard >
    )
}

export default ParkTitle;