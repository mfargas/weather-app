import logo from './logo.svg';
import './App.css';
import WeatherCard from './components/WeatherCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Weather App</h1>
      </header>
      <div>
        <h2>Daily Weather</h2>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <h2>Hourly Weather</h2>
      </div>
    </div>
  );
}

export default App;
