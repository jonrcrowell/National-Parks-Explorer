import styled from 'styled-components'

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.active ? "palevioletred" : "white"};
    color: ${props => props.active ? "white" : "#2D3748"};

    font-size: .5em;
    margin: .25em;
    padding: 0.25em 1em;
    border: 1px solid #CBD5E0;
    border-radius: 3px;
    &:hover {
        background-color: #2D3748;
        color: white;
    }
`;

export default Button;