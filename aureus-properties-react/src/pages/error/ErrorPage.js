import React, { useEffect, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from "./ErrorPage.module.css"

export default function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Timeout set")
        setTimeout(() => {
            navigate("/")
        }, 5000)
        console.log("Timeout ended")
    })
    
  return (
    <Fragment className={classes.errorPage}>
    <h2>Page not found :(</h2>
    <p>Redirecting user to homepage...</p>
    </Fragment>
  )
}