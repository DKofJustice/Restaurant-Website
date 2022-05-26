import React from 'react';
import LandingSection from '../../Layouts/Landing Section/LandingSection';
import About from '../../Layouts/About/About';
import Services from '../../Layouts/Services/Services';
import Menu from './../../Layouts/Menu/Menu';
import Reviews from './../../Layouts/Reviews/Reviews';
import Footer from './../../Layouts/Footer/Footer';

export default function LandingPage() {
  return (
    <React.Fragment>
      <LandingSection />
      <About />
      <Services />
      <Menu />
      <Reviews />
      <Footer />
    </React.Fragment>
  )
}
