import React, {useState} from 'react';
import Geocode from "react-geocode";
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import { GOOGLE_API_KEY } from '../apis/config';
import '../style/App.css'

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');
    const [results, setResults] = useState(null);
    const [lat, setLat]= useState(0);
    const [lng, setLng]=useState(0);

    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            onSearch();
        }
    };

    Geocode.fromAddress(city, GOOGLE_API_KEY).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            setLat(lat);
            setLng(lng);
            console.log(lat, lng); 
        },
        error => {
            console.error(error);
        }
    )
    
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
                    <Button onClick={() => onSearch(lat, lng)}>Check weather forecast</Button>
                </Col>
            </Row>
        </div>
    );
};

export default CitySelector;