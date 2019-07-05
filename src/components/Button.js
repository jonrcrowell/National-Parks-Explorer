import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.active ? "palevioletred" : "white"};
color: ${props => props.active ? "white" : "palevioletred"};

font-size: .5em;
margin: .25em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

export default Button;