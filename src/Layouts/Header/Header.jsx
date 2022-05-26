import React, { useState } from 'react';
import Logo from './../../Assets/Chido-logo.png';
import HamMenuIcon from './../../Assets/ant-design_menu-outlined.svg';

export default function Header() {

  //Mobile Hamburger Menu state, 'false' as closed initially

 let [isButtonTriggered, setIsButtonTriggered] = 
 useState(false);


  /*Opening and closing the Mobile Ham Menu, by switching the state
  on click*/

  let enableMenu = () => {
    setIsButtonTriggered(!isButtonTriggered);
  };


  //Selecting the DOM elements of the page

  let footer = document.getElementById('footer');
  let landingSection = document.getElementById('landing-section');
  let aboutSection = document.getElementById('about-section');
  let menuSection = document.getElementById('menu-section');

  //Scroll to different sections of the page, on ham menu buttons click

  let scrollToSection = (element) => {
    let elementCoords = element.getBoundingClientRect();
    window.scrollTo({
      top: elementCoords.y - 110,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <header>
      <div className='container container--header'>
      <div className='header-logo'>
        <img src={Logo} alt="" />
      </div>

      <ul className='menu-list menu-list-desktop'>
        <li className='menu-home' onClick={() => scrollToSection(landingSection)}>HOME</li>
        <li className='menu-menu' onClick={() => scrollToSection(menuSection)}>MENU</li>
        <li className='menu-about' onClick={() => scrollToSection(aboutSection)}>ABOUT</li>
        <li className='menu-contact' onClick={() => scrollToSection(footer)}>CONTACT</li>
        <li className='menu-order'>ORDER</li>
      </ul>

      <div className='ham-menu-icon' onClick={enableMenu}>
        <img src={HamMenuIcon} alt="" />
      </div>
      </div>
      
      <ul className={`menu-list 
      menu-list-mobile ${isButtonTriggered ? 
      'menu-mobile-active' : ''}`}>
        <li className='menu-home' onClick={() => scrollToSection(landingSection)}>
          HOME
        </li>
        <li className='menu-menu' onClick={() => scrollToSection(menuSection)}>
          MENU
        </li>
        <li className='menu-about' onClick={() => scrollToSection(aboutSection)}>
          ABOUT
        </li>
        <li className='menu-contact' onClick={() => scrollToSection(footer)}>
          CONTACT
        </li>
        <li className='menu-order'>ORDER</li>
      </ul>
    </header>
  )
}
