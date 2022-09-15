import React from 'react'
import classes from "./PropertyImages.module.css"

export default function PropertyImages(props) {

  return (
    <div className={classes["property-images"]}>
        <div className={classes["media-element"]}>
            <img src={props.image1} alt="property image1" />
        </div> 
        <div className={classes["media-element"]}>
            <img src={props.image2} alt="property image2" />
        </div> 
        <div className={classes["media-element"]}>
            <img src={props.image3} alt="property image3" />
        </div> 
    </div>
    )
}
