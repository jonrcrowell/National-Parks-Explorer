import React from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components"
import Explore from './components/Explore'
import Favorites from './components/Favorites'
import Tasks from './components/Tasks'


const NavContainer = styled.div`
    display: block;
    text-align: center;
    margin: -8px;
    `

const NavBar = styled.div`
    display: grid;
    background-color: hsl(211, 81%, 36%);
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    color: #EDF2F7;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  border: 1px solid white;
  padding: 10px 15px 10px 15px;
  background-color: hsl(211, 81%, 46%);
  margin-left: 50px;
  border-radius: 3px;
`;

const Navbar = () => (
    <NavContainer
    >
        <NavBar
            className="navbar">
            <h1>National Park Explorer</h1>
            <h4>Explore our National Parks through the data they provide</h4>
            <nav
            >
                <NavLink to="/">Explore</NavLink>
                <NavLink to="favorites">Favorites</NavLink>
                <NavLink to="tasks">Tasks</NavLink>
            </nav>
        </NavBar>
        <Router>
            <Explore path="/" />
            <Favorites path="favorites" />
            <Tasks path="tasks" />
        </Router>
    </NavContainer>
);

export default Navbar;