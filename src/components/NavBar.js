import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar">
            <NavLink
                to="/">
                Home
            </NavLink>
            <NavLink
                to="/about">
                About
            </NavLink>
            <NavLink
                to="/products">
                Find Products
            </NavLink>
        </nav>
    );
}

export default NavBar;