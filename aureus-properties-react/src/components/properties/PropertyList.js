import React, {useState} from 'react'
import classes from "./PropertyList.module.css"
import PropertyItem from './PropertyItem';
import data from '../../.data/db';


export default function PropertyList() {

    const {properties} = data;

    const [filteredProperties, setFilteredProperties] = useState(properties)

    function filterByLocationHandler(location) {
      const filteredData = properties.filter((item) => item.location === location);
      setFilteredProperties(filteredData);
    }


  return (
    <main className={classes["property-list"]}>
      <div className={classes.filters}>
        <h4>Filter by location:</h4>
        <select onChange={(event) => filterByLocationHandler(event.target.value)}>
          <option value="Guimaraes">Guimarães</option>
          <option value="Esposende">Esposende</option>
        </select>  
      </div>

        {filteredProperties && filteredProperties.map((property) => {
          return <PropertyItem 
            key={property.id}
            id={property.id}
            title={property.title}
            description={property.description}
            license={property.license}
            airbnbLink={property.airbnbLink}
            bookingLink={property.bookingLink}
            location={property.location}
            image1={property.imgOne}
            image2={property.imgTwo}
            image3={property.imgThree}
          />
        })}
    </main>
    
  )
}
