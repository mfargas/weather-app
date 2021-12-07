import React, {useState} from 'react';
import ToCoords from './ToCoords';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import '../style/App.css'

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');
    // const [results, setResults] = useState(null);
    // let lat;
    // let lng;

    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            ToCoords(city).then(onSearch());
        }
    };
    
    return (
        <div className="citySelector">
            <Row>
                <Col>
                    <h2>Enter your city</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={14}>
                    <FormControl
                        placeholder="Enter your city"
                        onChange={(event) => setCity(event.target.value)}
                        value={city}
                        onKeyDown={onKeyDown}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => onSearch()}>Check weather forecast</Button>
                </Col>
            </Row>
        </div>
    );
};

export default CitySelector;