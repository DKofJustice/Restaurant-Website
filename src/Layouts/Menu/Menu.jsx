import React from 'react'
import CTA from '../../Components/CTA-Button/CTA'
import BurritoImg from './../../Assets/burrito.jpeg';
import BurritoDish from './../../Assets/burrito-dish.jpeg';
import TacoDish from './../../Assets/taco-dish.jpg';
import AboutBkg from './../../Assets/Blank-chalkboard-desktop-background.jpg';

export default function Menu() {
  return (
    <div className='menu-section' id='menu-section'>
        <div className='menu-section-bkg'>
            <img src={AboutBkg} alt="" />
        </div>

        <div className='menu-panels'>
        <div className='menu-text-panel'>
            <div className='menu-text-content'>
                <h2>OUR MENU</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis tortor enim, placerat et efficitur congue, commodo vehicula velit. 
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut 
                    rhoncus nisi. Vivamus vitae nunc at ligula congue molestie ut ut elit. 
                    Phasellus dignissim vulputate varius. Donec sagittis eros at arcu consectetur, 
                    at iaculis lectus egestas.</p>
                <CTA classname='Menu-CTA' text='View Full Menu'/>    
            </div>
        </div>

        <div className='menu-image-panel'>
            <div className='menu-image menu-image-1'>
                <img src={BurritoImg} alt="" />
            </div>

            <div className='menu-image menu-image-2'>
                <img src={BurritoDish} alt="" />
            </div>

            <div className='menu-image menu-image-3'>
                <img src={TacoDish} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}
