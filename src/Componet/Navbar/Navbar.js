import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-buttons'>
                <Link to='/'>Quiz</Link>
                <Link to='/stats'>Statistic</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default NavBar;