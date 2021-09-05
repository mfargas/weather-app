import React from 'react';
import CitySelector from './components/CitySelector';
import './style/App.css';
import WeatherCard from './components/WeatherCard';
import { Container } from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Four Day Forecast</h2>
        <CitySelector />
        <div className="four-day-forecast-container">
          <WeatherCard 
            dt={3198374 * 1000}
            minTemp="22.54"
            maxTemp="25.30"
            main="sunny"
            icon="01d"
          />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </header>
      <div className="section-2">
        <p>next section</p>
      </div>
    </div>
  );
}

export default App;
