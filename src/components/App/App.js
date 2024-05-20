import React, {useState} from 'react';
import styles from './App.module.css'
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/currentweather';
import Forecast from '../Forecast/forecast';
import imageStorm from '../storm.png';

function App() {
  const [currentLocation, setLocation] = useState([
    {
      location: "Rio de Janeiro",
      temperature: "15º",
      image: {imageStorm},
    },
  ]);

  return (
    <div className="App">
      <Search currentLocation={currentLocation} />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default App;
