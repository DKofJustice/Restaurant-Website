import React from 'react'
import Facebook from './../../Assets/bxl_facebook.svg';
import Twitter from './../../Assets/akar-icons_twitter-fill.svg';
import Instagram from './../../Assets/akar-icons_instagram-fill.svg';

import LocationIcon from './../../Assets/akar-icons_location.svg';
import PhoneIcon from './../../Assets/bxs_phone.svg';
import EmailIcon from './../../Assets/clarity_email-solid.svg';

export default function Footer() {
  return (
    <footer id='footer'>
        <div className='footer-content'>
            <div className='footer-about'>
                <h3>ABOUT US</h3>
                <p>Far far away, behind the word mountains, far from the 
                    countries Vokalia and Consonantia, there live the blind 
                    texts.</p>
            </div>

            <div className='footer-services'>
                <h3>SERVICES</h3>
                
                <ul className='footer-service-list'>
                    <li>Cooked</li>
                    <li>Deliver</li>
                    <li>Quality Foods</li>
                    <li>Mixed</li>
                </ul>
            </div>

            <div className='footer-social'>
                <h3>Follow Us</h3>
                
                <ul className='footer-links'>
                    <li><img src={Facebook} alt="" /></li>
                    <li><img src={Twitter} alt="" /></li>
                    <li><img src={Instagram} alt="" /></li>
                </ul>
            </div>

            <div className='footer-contact'>
                <h3>Have any questions?</h3>

                <div className='contact-list'>
                    <div className='contact-address'>
                        <div className='address-icon'><img src={LocationIcon} alt="" /></div>
                        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                    </div>

                    <div className='contact-phone'>
                        <div className='phone-icon'><img src={PhoneIcon} alt="" /></div>
                        <p>+2 392 3929 210</p>
                    </div>

                    <div className='contact-email'>
                        <div className='email-icon'><img src={EmailIcon} alt="" /></div>
                        <p>info@yourdomain.com</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
