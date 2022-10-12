import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header'

const Body = () => {
    const topics= useLoaderData()
    return (
        <div>
            <div>

            </div>
            <div>
                <Header
                    key={topics.id}
                    topics={topics}
                ></Header>
            </div>
        </div>
        
    );
};

export default Body;