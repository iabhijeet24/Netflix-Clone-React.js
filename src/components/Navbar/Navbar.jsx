import React from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg';
import bellIcon from '../../assets/bell_icon.svg';




const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logoImage" />

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>      
      </div>

      <div className="navbar-right">
        <img src={searchIcon} alt="searchIcon" />
        <img src={bellIcon} alt="bellIcon" />
      </div>
    </div>
  )
}

export default Navbar
