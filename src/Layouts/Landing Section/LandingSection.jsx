import React from 'react'
import HeroBkg from './../../Assets/mexican-homepage-picture-1.png';
import CTA from './../../Components/CTA-Button/CTA';

export default function LandingSection() {
  return (
    <div className='landing-section' id='landing-section'>
      <div className='landing-bkg'>
        <img src={HeroBkg} alt="" />
      </div>

      <div className='hero-text'>
        <h1>AMAZING AND TASY MEXICAN FOOD</h1>
        <h2>Want to try something new? We cook incredible food, with natural ingredients,
           that our clients love to eat every time they come to us.</h2>
        <CTA classname='CTA-Hero' text='Explore'/>
      </div>
    </div>
  )
}
