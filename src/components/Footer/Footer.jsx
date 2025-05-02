import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="col">
          <h3>Explore Our Menu</h3>
          <p>Menu</p>
          <p>Nutritions</p>
          <p>Ingredients</p>
          <p>Drink Menu</p>
        </div>
        <div className="col">
          <h3>Get To Know Us</h3>
          <p>About Us</p>
          <p>Franchisings</p>
          <p>Foundations</p>
          <p>Mission Statements</p>
        </div>
        <div className="col">
          <h3>Get In Touch</h3>
          <p>Press</p>
          <p>Carrers</p>
          <p>Contact Ud</p>
          <p>Get Socials</p>
        </div>
        <div>
          <h1>Let's Connect</h1>
          <div className="socials">
            <FaFacebookSquare className='icon' />
            <FaInstagramSquare className='icon' />
            <FaTwitterSquare className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer