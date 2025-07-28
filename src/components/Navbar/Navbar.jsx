import React from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg';
import bellIcon from '../../assets/bell_icon.svg';
import caretIcon from '../../assets/caret_icon.svg';
import profileImage from '../../assets/profile_img.png';




const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logoImage" className='logoImage'/>

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>      
      </div>

      <div className="navbar-right">
        <img src={searchIcon} alt="searchIcon"  className='icons'/>
        <img src={bellIcon} alt="bellIcon" className='icons'/>
      </div>

      <div className="navbar-profile">
        <img src={profileImage} className='profile-image' />
        <img src={caretIcon} className='caret-icon'/>
      </div>
    </div>
  )
}

export default Navbar
