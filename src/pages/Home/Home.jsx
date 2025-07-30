import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroImage from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import playIcon from '../../assets/play_icon.png'
import infoIcon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='HomePage'>
      <Navbar />

      <div className="hero-page">
        <img src={heroImage} className='hero-image' alt="Hero Banner" />
        <div className="hero-caption">
          <img src={heroTitle} className='caption-image'></img>
          <p className='caption-text'>Discovering his ties to an ancient secret order, a ypung man living in modern Istanbul embarks a quest to save the city from a immortal enemy.</p>
          
          <div className="hero-button">
             <button className='btn1'> <img src={playIcon} alt="icon" /> Play </button>
             <button className='btn2'> <img src={infoIcon} alt="icon" /> More Info</button>
          </div>
         
        </div>

      </div>
    </div>
  )
}

export default Home
