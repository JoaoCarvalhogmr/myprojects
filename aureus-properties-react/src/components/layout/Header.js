import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import classes from "./Header.module.css"

export default function Header() {

  return (
     <header className={classes.header}>
        <div className={classes.siteLogo}>
          <Link to="/">
            <img src="../assets/images/logo.png" alt="company logo" />
          </Link>
        </div>
        <Navbar />
     </header>
  )
}
