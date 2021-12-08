import React, {useState} from 'react';
import Geocode from "react-geocode";
// import { REACT_APP_GOOGLE_API_KEY } from '../apis/config';

const ToCoords = (city) => {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    Geocode.fromAddress(city, REACT_APP_GOOGLE_API_KEY).then(
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

    return lat && lng

}

export default ToCoords;