import React from 'react'
import './thankyou.scss'
import home from '../image/home-image.png'
const ThankYou = () => {
  return (
    <>
      <div className='thankYou text-center grid grid-1 py-5'>
        <div className='image'>
          <img src={home} alt='' />
        </div>
        <div>
          <h1 className='text-blue lg'> Thank you for your message</h1>
          <h3 className='text-light sm'>
            We will get back to you as soon as possible
          </h3>
        </div>
      </div>
    </>
  )
}

export default ThankYou
