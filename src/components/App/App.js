/* src/components/App/App.js */
import React, { useState } from 'react';
import styles from './App.module.css';
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/currentweather';
import Forecast from '../Forecast/forecast';

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: process.env.REACT_APP_WEATHER_API_BASE,
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!search) return;
    setLoading(true);
    setError('');

    try {
      // Busca Clima Atual
      const weatherRes = await fetch(`${api.base}weather?q=${search}&units=metric&lang=pt_br&APPID=${api.key}`);
      const weatherData = await weatherRes.json();

      if (weatherData.cod !== 200) throw new Error(weatherData.message);

      // Busca Previsão (usando as coordenadas do resultado anterior para precisão)
      const { lat, lon } = weatherData.coord;
      const forecastRes = await fetch(`${api.base}forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${api.key}`);
      const forecastData = await forecastRes.json();

      setWeather(weatherData);
      // Filtra para pegar apenas uma previsão por dia (a API retorna a cada 3h)
      const dailyForecast = forecastData.list.filter((reading) => reading.dt_txt.includes("12:00:00")).slice(0, 4);
      setForecast(dailyForecast);

    } catch (err) {
      setError("Cidade não encontrada ou erro na conexão.");
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.glassCard}>
        <h1 className={styles.appTitle}>Sky Cast</h1>
        
        <Search 
          search={search} 
          setSearch={setSearch} 
          handleSearch={handleSearch} 
        />

        {error && <p className={styles.error}>{error}</p>}
        {loading && <p className={styles.loading}>Carregando...</p>}

        {weather && <CurrentWeather data={weather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default App;