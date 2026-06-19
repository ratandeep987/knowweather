import {useState} from 'react';
import './App.css';
function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
  if (!city.trim()) return;
  setLoading(true);
  setError('');
  try {
    const API_KEY = '0fba65776f84c4be741173c22a319288';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    if (data.cod === '404') {
      setError('City not found!');
    } else {
      setWeather(data);
    }
  } catch {
    setError('Something went wrong!');
  } finally {
    setLoading(false);
  }
};

  return (                                                    
    <>  
    <h2>Know weather</h2>

    <input 
      type = "text" placeholder ="Enter your City name : "
      value={city}
      onChange={(e) => setCity(e.target.value)} />

      <button onClick = {fetchWeather}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && !loading && (
  <div className="card">
    <h3>{weather.name}, {weather.sys.country}</h3>
    <img
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      alt="icon"
    />
    <p className="temp">{Math.round(weather.main.temp)}°C</p>
    <p className="desc">{weather.weather[0].description}</p>

    <div className="details">
      <div className="detail-item">
        <span className="detail-label">Humidity</span>
        <span className="detail-value">{weather.main.humidity}%</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Wind</span>
        <span className="detail-value">{Math.round(weather.wind.speed)} m/s</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Feels Like</span>
        <span className="detail-value">{Math.round(weather.main.feels_like)}°C</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Pressure</span>
        <span className="detail-value">{weather.main.pressure} hPa</span>
      </div>
    </div>
  </div>
)}
    </>
  );
}

export default App;