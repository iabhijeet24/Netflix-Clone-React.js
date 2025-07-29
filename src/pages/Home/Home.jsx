import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroImage from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'

const Home = () => {
  return (
    <div className='HomePage'>
      <Navbar />

      <div className="hero-page">
        <img src={heroImage} className='hero-image' alt="Hero Banner" />
        <div className="hero-caption">
          <img src={heroTitle} className='caption-image'></img>
          <p className='caption-text'>Discovering his ties to an ancient secret order, a ypung man living in moder instanbul embarks a quest to save the city from a immortal enemy.</p>
        </div>

      </div>
    </div>
  )
}

export default Home
