import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <img src={logo} alt=""/>
            <h2 style={{color:'green'}}>User Profile</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
                <a href="/profile">Profile</a>
                <a href="/event">Event</a>
            </nav>
        </div>
    );
};

export default Header;