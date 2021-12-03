import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({ dt, max, min, main, icon }) => {
    const date = new Date(dt);

        return(
        <Card >
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Card.Body>
                <Card.Title>{main}</Card.Title>
                    <p>{date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
                    <p>Min: {min}</p>
                    <p>Max: {max}</p>
            </Card.Body>
        </Card>
    )
}


export default WeatherCard;