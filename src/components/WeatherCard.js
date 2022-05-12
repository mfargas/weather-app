import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({ dt, max, min, main, icon }) => {
    const date = new Date(dt);

        return(
        <Card >
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Card.Body>
                <Card.Title>{main}</Card.Title>
                    <p>{date.toLocaleDateString()} - {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <p>Min: {min}{'\u00B0'}F</p>
                    <p>Max: {max}{'\u00B0'}F</p>
            </Card.Body>
        </Card>
    )
}


export default WeatherCard;