import React from 'react';
import CitySelector from './components/CitySelector';
import './style/App.css';
import { Container } from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_BASE_URL, API_KEY} from './apis/config';
import WeatherList from './components/WeatherList';


function App() {
  const { data, error, isLoading, setUrl } = UseFetch();

  console.log(data)

  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>
    if (!data && isLoading) return <h2>LOADING...</h2>
    if (!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container className="App">
        <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
        {getContent()}
        {/* {data && <WeatherList weathers={data.list} />} */}
      {/* <div className="section-2">
        <p>next section</p>
      </div> */}
    </Container>
  );
}

export default App;
