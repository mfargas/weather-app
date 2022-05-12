import React, {useState} from 'react';
import ToCoords from './ToCoords';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import '../style/App.css'

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    // const [results, setResults] = useState(null);
    // let lat;
    // let lng;

    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            onSearch()
        }

        console.log(city)
        console.log(state)
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
                    <br/>
                    <FormControl
                        placeholder="Country (Optional)"
                        onChange={(event) => setState(event.target.value)}
                        value={state}
                        onKeyDown={onKeyDown}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => onSearch(city, state)}>Check weather forecast</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {}
                </Col>
            </Row>
        </div>
    );
};

export default CitySelector;