import React from 'react'
import "./navbar.scss" 
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import { useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png" alt=""/>
    
        <span>Homepage</span>
        <span>Series</span>
        <span>Movie</span>
        <span>New and Popular</span>
        <span>My List</span>
        </div>
        <div className="right">
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg" alt="" />
            <div className="profile">
                <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
