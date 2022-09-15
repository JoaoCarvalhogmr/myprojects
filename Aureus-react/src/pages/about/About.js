import React from 'react'
import classes from "./About.module.css"

export default function About() {
  return (
      <main className={classes["about-us"]}>
        <article>
          <h2>ABOUT US</h2>
          <p>Fueled by its founders’ ambition of creating a unique structure that combined their expertise in business, tourism, event planning and real-estate, AUREUS PROPERTIES was established in 2018 in Guimarães [Northern Portuguese region], aiming to provide the ideal properties for short term term rental, holiday rental and local housing.</p>
          <p>AUREUS PROPERTIES delivers an exceptional temporary living experience in the best housing options in the area, being the ideal housing solution either for individual travelers and families, business travelers and groups. Fully furnished and fully equipped with all commodities.</p>
          <p>Our goal is to make you feel at home, and for that we have a multilingual team that’s ready 24/7 to personally check you in and out, guiding you through the properties and thus making themselves available to answer all your doubts and help you browse through the city. No matter what the reason for your stay is, we will help you in whatever you need.</p>
        </article>

        <hr className={classes.hr} />

        <article className={classes["about-location"]}>
            <div className={classes.content}>  
              <h2>ABOUT GUIMARÃES</h2>
              <p>Guimarães is located in the Northern Portuguese region, less than 60km from Porto and Francisco Sá Carneiro Airport.</p>
              <p>Its roots go back to the 10th Century, being one of the oldest cities in Portugal, and it was the site of the Portuguese Battle for Independence in June 24th 1128.</p>
              <p>Especially from the past three decades, Guimarães started gathering worldwide tourism recognition. First, in 2001 the Historical Center was named World Heritage Site by UNESCO. Then, in 2012 and 2013 the city was named European Capital of Culture and European Sports Capital, thus being placed among the touristic highlights for publications like the New York Times, Time Magazine, Telegraph, among others.</p>
              <p>Besides its main attractions (Guimarães Castle, Ducal Palace, Oliveira and Santiago Squares, Penha Mountain, Platform For Arts and Creativity, Vila Flor Cultural Center, ...), its location also provides the perfect HQ for those wanting to explore the Northern Portuguese area, being perfect to visit cities like Porto [60 km], Braga [15 km], Viana do Castelo [60 km], the Gerês Natural Park [50 km] and the Douro Wine Region [70 km]. Wonderful beaches can be also foud in Matosinhos [60 km] or Esposende [40 km]. All these places are less than a 2 hour car drive distance.</p>
            </div>
            <iframe className={classes.video} 
                    src="https://www.youtube.com/embed/wIe3Qfk-RfY" 
                    title="Guimaraes" 
                    frameBorder="0" 
                    allowFullScreen>
            </iframe>
        </article>
        
        <hr className={classes.hr} />
        <article className={classes["about-location"]}>
          <div className={classes.content}>
            <h2>ABOUT OFIR</h2>
            <p>Praia de Ofir is located in the parish of Fão, Municipality of Esposende, District of Braga, Portugal</p> 
            <p>It is a sea beach, located on a stretch of coast that joins the north with the mouth of the Cávado River and is part of the North Coast Natural Park</p>
          </div>
          <iframe className={classes.video} 
                    src="https://www.youtube.com/embed/H3Ed_TQ7QbQ"
                    title="Ofir" 
                    frameBorder="0" 
                    allowFullScreen>
            </iframe>
        </article>
      </main>
  )
}
