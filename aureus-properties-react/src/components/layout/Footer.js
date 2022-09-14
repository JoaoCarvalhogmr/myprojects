import React from 'react'
import classes from "./Footer.module.css"
import { SocialIcon } from 'react-social-icons'

export default function Footer() {

  return (
    <footer className={classes.footer}>
      <p>Aureus Properties 2022 - All rights reserved</p>
      <div className={classes["social-network"]}>
        <p>Follow us</p>
        <SocialIcon url="https://www.facebook.com/aureusprops" 
                    network="facebook"
                    fgColor='#fff' 
                    style={{ marginLeft: "0.75em"}} />
      </div>
    </footer>
  )
}
