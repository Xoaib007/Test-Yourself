import React from 'react';
import './Header.css'
import { useLoaderData } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Topics from '../Topics/Topics';

const Header = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='header'>
                <Card className="bg-dark text-dark">
                    <Card.Img className='banner' src="https://i.ibb.co/2FtLWJr/banner.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <h1>Test Yourself</h1>
                        <Card.Text>
                        They say you should test yourself to know your true potential. So lets choose a topic below and and put your wizarding knowledge to the test with curious quizzes for all levels. Good Luck!!!
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <div className='topic-container'>
                    {
                        topics.data.map(topics=><Topics
                        key={topics.id}
                        topics={topics}
                        ></Topics>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;