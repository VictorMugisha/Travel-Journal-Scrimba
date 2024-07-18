import React from 'react'
import googleMapImg from "../../public/images/google-maps.png"

export default function Travel(props) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props
  return (
    <div className="card">
        <img src={imageUrl} alt="Card Main Image" className='card--image'/>
        <div className="description">
            <div className='directions'>
                <img src={googleMapImg} alt="Google Map Icon" />
                <h4>{location.toUpperCase()}</h4>
                <a href={googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{title}</h1>
            <h3>{startDate} - {endDate}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}
