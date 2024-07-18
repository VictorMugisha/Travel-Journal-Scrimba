import React from 'react'
import globeImage from "../../public/images/globe.png"

export default function Header() {
  return (
    <header className='header'>
        <img src={globeImage} alt="Global Image Icon" className='header--image'/>
        <p>my travel journal.</p>
    </header>
  )
}
