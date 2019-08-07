import React from "react";
import { Router, Link } from "@reach/router";
import Explore from './components/Explore'
import Favorites from './components/Favorites'
import Tasks from './components/Tasks'

const Navbar = () => (
    <div
        style={{
            display: "block",
            textAlign: "center",
            padding: "10px",
            backgroundColor: "hsl(211, 81%, 36%)",
            margin: "-8px -8px 20px -8px"
        }}
    >
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                alignItems: "center",
            }} className="navbar">
            <h1>National Park Explorer</h1>
            <h4>Explore our National Parks through the data they provide</h4>
            <nav
                style={{
                    display: "flex",
                    marginLeft: "50px"
                }}>
                <Link style={{
                    marginLeft: "50px"
                }} to="/">Explore</Link>
                <Link style={{
                    marginLeft: "50px"
                }} to="favorites">Favorites</Link>
                <Link style={{
                    marginLeft: "50px"
                }} to="tasks">Tasks</Link>
            </nav>
        </div>
        <Router>
            <Explore path="/" />
            <Favorites path="favorites" />
            <Tasks path="tasks" />
        </Router>
    </div>
);

export default Navbar;