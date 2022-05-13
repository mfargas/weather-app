import { useState, useEffect } from 'react';
// import Geocode from "react-geocode";


const UseFetch = (initialUrl) => {
    // create state variables
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {

        if (!url) return;
        setIsLoading(true);
        // clear old search
        setData(null);
        setError(null);

        // Geocode.fromAddress(city, REACT_APP_GOOGLE_API_KEY).then(
        //     response => {
        //         const { lat, lng } = response.results[0].geometry.location;
        //         setLat(lat);
        //         setLng(lng);
        //         console.log(lat, lng);
        //     },
        //     error => {
        //         console.error(error);
        //     }
        // ).then()

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                if (data.cod >= 400) {
                    setError(data.message);
                    return;
                }
                setData(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });
        // dependency array 
    }, [url]);

    return { data, error, isLoading, setUrl };
};

export default UseFetch;