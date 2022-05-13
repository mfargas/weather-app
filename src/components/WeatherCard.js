import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({ dt, temp, main, icon }) => {
    const date = new Date(dt);

        return(
        <Card >
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Card.Body>
                <Card.Title>{main}</Card.Title>
                    <p>{date.toLocaleDateString()} - {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <p>Temp: {temp}{'\u00B0'}F</p>
            </Card.Body>
        </Card>
    )
}


export default WeatherCard;