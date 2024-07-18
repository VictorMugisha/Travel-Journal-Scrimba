import React from 'react'
import cardImg from "../../public/images/mount-fuji.jpg"
import googleMapImg from "../../public/images/google-maps.png"

export default function Travel() {
  return (
    <div className="card">
        <img src={cardImg} alt="Card Main Image" className='card--image'/>
        <div className="description">
            <div className='directions'>
                <img src={googleMapImg} alt="Google Map Icon" />
                <h4>JAPAN</h4>
                <a href="#">View on Google Maps</a>
            </div>
            <h1>Mount Fuji</h1>
            <h3>12 Jan, 2021 - 24 Jan 2021</h3>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    </div>
  )
}
