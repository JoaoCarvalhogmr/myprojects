import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./Navbar.module.css"

export default function Navbar() {


function isActiveHandler ({isActive}) {
    if (isActive) {
      return {
        color: "#B5A2A2",
        fontWeight: 400,
        textDecoration: "none"
      }
    }
    else {
      return;
    }
  }
  return (
    <nav className={classes.navbar}>
        <ul>
            <li>
                <NavLink style={isActiveHandler}  to="/">Home</NavLink>
            </li>
            <li>
                <NavLink style={isActiveHandler} to="/about">About us</NavLink>
            </li>
            <li>
                <NavLink style={isActiveHandler} to="/properties">Properties</NavLink>
            </li>
            <li>
                <NavLink style={isActiveHandler} to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
  )
}
