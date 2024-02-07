import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive Offers on your email</h1>
      <p>Subsacribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your email Id' />
        <button>Subscribe</button>
      </div>
    </div>
    
  )
}

export default NewsLetter