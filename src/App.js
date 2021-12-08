import React from 'react';
import CitySelector from './components/CitySelector';
import './style/App.css';
import { Container } from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
// import { REACT_APP_API_BASE_URL, REACT_APP_API_KEY } from './apis/config';
import WeatherList from './components/WeatherList';


function App() {
  const { data, error, isLoading, setUrl } = UseFetch();

  const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

  console.log(data)

  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>
    if (!data && isLoading) return <h2>LOADING...</h2>
    if (!data) return null;
    return <WeatherList weathers={data.daily} />
  };

  return (
    <Container className="App">
      <CitySelector onSearch={(lat, lng) => setUrl(`${REACT_APP_API_BASE_URL}data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${REACT_APP_API_KEY}&units=metric`)} ></CitySelector>
      <div className="weatherList">
        {getContent()}
        <p>Forecast provided by openweathermap</p>
      </div>
    </Container>
  );
}

export default App;
