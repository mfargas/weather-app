import React, {useState} from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';


const CitySelector = () => {
    const [city, setCity] = useState('');
    const [results, setResults] = useState(null);
    const onSearch= () => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`).then((response) => response.json()).then((results) => setResults(results));
    };
    
    return (
        <>
            <Row>
                <Col>
                    <h1>Enter your city</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <FormControl 
                        placeholder="Enter your city"
                        onChange={(event)=>setCity(event.target.value)}
                        value={city}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={onSearch}>Check weather forecast</Button>
                </Col>
            </Row>
        </>
    );
};

export default CitySelector;