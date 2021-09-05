import React, {useState} from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import { API_KEY, API_BASE_URL } from '../apis/config';

const CitySelector = () => {
    const [city, setCity] = useState('');
    const [results, setResults] = useState(null);
    const onSearch= () => {
        fetch(`${ API_BASE_URL }data/2.5/forecast?q=${ city }&appid=${ API_KEY }&units=metric`).then((response) => response.json()).then((results) => setResults(results));
    };

    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            onSearch();
        }
    };
    
    return (
        <>
            <Row>
                <Col>
                    <h1>Enter your city</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={14}>
                    <FormControl 
                        placeholder="Enter your city"
                        onChange={(event)=>setCity(event.target.value)}
                        value={city}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    {  }
                    <Button onClick={onSearch}>Check weather forecast</Button>
                </Col>
            </Row>
        </>
    );
};

export default CitySelector;