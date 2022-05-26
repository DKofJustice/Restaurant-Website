import { useState } from 'react';

export default function useMenuBtnScrollTo() {


    let footer = document.querySelector('footer');
    let landingSection = document.querySelector('.landing-section');
    let aboutSection = document.querySelector('.about-section');
    let menuSection = document.querySelector('.menu-section');
  
    //Scroll to different sections of the page, on ham menu buttons click

    let scrollToSection = (element) => {
      let elementCoords = element.getBoundingClientRect();
  
      console.log(elementCoords, element);
      window.scrollTo({
        top: elementCoords.top - 100 + window.scrollY,
        left: 0,
        behavior: 'smooth',
      });
  
    }

    return { footer, landingSection, aboutSection, menuSection,
    scrollToSection }
}
