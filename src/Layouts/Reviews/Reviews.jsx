import React from 'react'
import ReviewsImg from './../../Assets/maxresdefault.png';

export default function Reviews() {
  return (
    <div className='reviews-section'>
        <div className='reviews-bkg'>
            <img src={ReviewsImg} alt="" />
        </div>
        <div className='review-text-panel'>
            <div className='review-text-content'>
                <h2>CUSTOMER REVIEWS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis tortor enim, placerat et efficitur congue, commodo 
                    vehicula velit.</p>
            </div>
        </div>

        <div className='user-reviews-panel'>
            <div className='user-reviews-content'>
                <div className='review-box review-box-1'>
                    <div className='review-box-content'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Duis tortor enim, placerat et efficitur congue, 
                            commodo vehicula velit.”</p>
                        <p>Louise Kelly Illustrator Designer</p>
                    </div>
                </div>

                <div className='review-box review-box-2'>
                    <div className='review-box-content'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Duis tortor enim, placerat et efficitur congue, 
                            commodo vehicula velit.”</p>
                        <p>Louise Kelly Illustrator Designer</p>
                    </div>
                </div>

                <div className='review-box review-box-3'>
                    <div className='review-box-content'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Duis tortor enim, placerat et efficitur congue, 
                            commodo vehicula velit.”</p>
                        <p>Louise Kelly Illustrator Designer</p>
                    </div>
                </div>

                <div className='review-box review-box-4'>
                    <div className='review-box-content'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Duis tortor enim, placerat et efficitur congue, 
                            commodo vehicula velit.”</p>
                        <p>Louise Kelly Illustrator Designer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
