import React from 'react'
import AboutBkg from './../../Assets/Blank-chalkboard-desktop-background.jpg';
import AboutProd from './../../Assets/about-image.jpg';

export default function About() {
  return (
    <div className='about-section' id='about-section'>
        <div className='about-bkg-frame'>
            <img src={AboutBkg} alt="" />
        </div>

        <div className='about-sidepanels'>
            <div className='about-text-panel'>
              <div className='about-text-content'>
                <h2>ABOUT US</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Duis tortor enim, placerat et efficitur congue, commodo vehicula velit. 
                  Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut rhoncus 
                  nisi. Vivamus vitae nunc at ligula congue molestie ut ut elit. 
                  Phasellus dignissim vulputate varius. Donec sagittis eros at arcu consectetur, at 
                  iaculis lectus egestas. Donec sit amet aliquet diam. Maecenas eget aliquet dolor. 
                  Nullam sed hendrerit orci, id tempor eros. Suspendisse potenti.</p>
              </div>
            </div>

            <div className='about-image-panel'>
              <img src={AboutProd} alt="" />
            </div>
        </div>
    </div>
  )
}
