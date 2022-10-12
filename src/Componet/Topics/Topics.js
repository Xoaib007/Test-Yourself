import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'


const Topics = ({topics}) => {
    return (
            <div className='topics'>
                <img className='logo' src={topics.logo} alt=""></img>
                <div className='topic-info'>
                    <h1>{topics.name}</h1>
                    <h3>Total Quiz: {topics.total}</h3>
                </div>
                <button className='quiz-btn'>
                    <Link to={`${topics.id}`} className='btn-text'>Take the test</Link>
                </button>
            </div>
        
    );
};

export default Topics;