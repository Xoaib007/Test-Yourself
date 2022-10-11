import React from 'react';
import { Card } from 'react-bootstrap';
import './Topics.css'


const Topics = () => {
    return (
        <div className='header'>
            <Card className="bg-dark text-dark">
            <Card.Img src="https://i.ibb.co/2FtLWJr/banner.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title><h1>Test Yourself</h1></Card.Title>
                <Card.Text>
                They say you should test yourself to know your true potential. So lets choose a topic below and and put your wizarding knowledge to the test with curious quizzes for all levels. Good Luck!!!
                </Card.Text>
            </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Topics;