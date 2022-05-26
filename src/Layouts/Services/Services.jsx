import React from 'react'
import EasyOrder from './../../Assets/mdi_order-bool-descending.svg';
import FastDeliv from './../../Assets/carbon_delivery.svg';
import QualityFood from './../../Assets/fluent_food-16-filled.svg';

export default function Services() {
  return (
    <div className='services-section'>
        <div className='services-content'>
            <div className='service service-1'>
                <div className='service-img-cont'>
                    <img src={EasyOrder} alt="" />
                </div>
                <h2>EASY TO ORDER</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='service service-2'>
                <div className='service-img-cont'>
                    <img src={FastDeliv} alt="" />
                </div>
                <h2>FAST DELIVERY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='service service-3'>
                <div className='service-img-cont'>
                    <img src={QualityFood} alt="" />
                </div>
                <h2>QUALITY FOOD</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
  )
}
