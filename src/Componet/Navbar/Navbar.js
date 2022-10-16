import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-buttons'>
                <NavLink to='/' >Quiz</NavLink>
                <NavLink to='/stats'>Statistic</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default NavBar;