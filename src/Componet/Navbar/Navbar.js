import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-buttons'>
                <a href='/'>Quiz</a>
                <a href='/stats'>Statistic</a>
                <a href='.blog'>Blog</a>
            </div>
        </div>
    );
};

export default NavBar;