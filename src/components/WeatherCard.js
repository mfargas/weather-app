import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({ dt, minTemp, maxTemp, main, icon }) => {
    const date = new Date(dt);

    // render() {
        return(
        // <div>
        <Card >
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Card.Body>
                <Card.Title>{main}</Card.Title>
                    <p>{date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
                    <p>Min: {minTemp}</p>
                    <p>Max: {maxTemp}</p>
            </Card.Body>
        </Card>
    // </div>
    );
}


export default WeatherCard;