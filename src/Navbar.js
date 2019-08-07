import React from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components"
import Explore from './components/Explore'
import Favorites from './components/Favorites'
import Tasks from './components/Tasks'


const NavContainer = styled.div`
    display: block;
    text-align: center;
    padding: 10px;
    background-color: hsl(211, 81%, 36%);
    margin: -8px;
    margin-right: 20px;
`

const NavBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    color: #EDF2F7;
`

const Navbar = () => (
    <NavContainer
    >
        <NavBar
            className="navbar">
            <h1>National Park Explorer</h1>
            <h4>Explore our National Parks through the data they provide</h4>
            <nav
            >
                <Link style={{
                    color: "white",
                    textDecoration: "none",
                    border: "1px solid white",
                    padding: "10px 15px 10px 15px",
                    backgroundColor: "hsl(211, 81%, 46%)",
                    marginLeft: "50px"
                }} to="/">Explore</Link>
                <Link style={{
                    color: "white",
                    textDecoration: "none",
                    border: "1px solid white",
                    padding: "10px 15px 10px 15px",
                    backgroundColor: "hsl(211, 81%, 46%)",
                    marginLeft: "50px"
                }} to="favorites">Favorites</Link>
                <Link style={{
                    color: "white",
                    textDecoration: "none",
                    border: "1px solid white",
                    padding: "10px 15px 10px 15px",
                    backgroundColor: "hsl(211, 81%, 46%)",
                    marginLeft: "50px"
                }} to="tasks">Tasks</Link>
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