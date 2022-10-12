import React from 'react';
import './Topics.css'


const Topics = ({topics}) => {
    console.log(topics)
    return (
            <div className='topics'>
                <img className='logo' src={topics.logo} alt=""></img>
                <div className='topic-info'>
                    <h1>{topics.name}</h1>
                    <h3>Total Quiz: {topics.total}</h3>
                </div>
                <button className='quiz-btn'>
                    <h3 className='btn-text'>Take the test</h3>
                </button>
            </div>
        
    );
};

export default Topics;