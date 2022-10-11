import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-buttons'>
                <a href='/'>Quiz</a>
                <a href='/stats'>Statistic</a>
                <a href='.blog'>Blog</a>
            </div>
        </div>
    );
};

export default Header;