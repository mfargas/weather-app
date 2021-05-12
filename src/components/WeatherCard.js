import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({ dt, minTemp, maxTemp, main, icon }) => {
    const date = new Date(dt);

    // render() {
        return(
        <div>
        <Card>
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Card.Body>
                <Card.Title>{main}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Weather</Card.Subtitle>
                    <p>{date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
                    <p>Min: {minTemp}</p>
                    <p>Max: {maxTemp}</p>
                <Card.Link href="#">Link</Card.Link>
            </Card.Body>
        </Card>
    </div>
    );
  }


export default WeatherCard;