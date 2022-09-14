import React from 'react'
import PropertyImages from './PropertyImages'
import classes from "./PropertyItem.module.css"



export default function PropertyItem(props) {

  return (
    <div className={classes["property-item"]}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <PropertyImages image1={props.image1} image2={props.image2} image3={props.image3} />
        {props.license && <p><strong>License nº</strong> {props.license}</p>}
        <div className={classes.links}>
          {props.airbnbLink && <button><a href={props.airbnbLink}>Airbnb</a></button>}
          {props.bookingLink && <button><a href={props.bookingLink}>Booking</a></button>}
        </div>
    </div>
  )
}