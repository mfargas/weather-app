import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
class WeatherCard extends Component{
    render(){
        return(
        <div>
        <Card>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Weather</Card.Subtitle>
                    <Card.Text>
                        Caption
                    </Card.Text>
                <Card.Link href="#">Link</Card.Link>
            </Card.Body>
        </Card>
        </div>
        );
    }
}

export default WeatherCard;