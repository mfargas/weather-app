import './App.css';
import WeatherCard from './components/WeatherCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Four Day Forecast</h2>
        <div className="four-day-forecast-container">
          <WeatherCard />
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
