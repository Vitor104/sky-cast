import React, {useState} from 'react';
import styles from './App.module.css'
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/currentweather';
import Forecast from '../Forecast/forecast';
import imageStorm from '../storm.png';

function App() {

  const API = {
    key: "99600cffaca177235cff252ce19ca928",
    base: "http://api.openweathermap.org/data/2.5/",
  }


  return (
    <div className="App">
      <CurrentWeather />
      <Forecast />
      </div>
  );
}

export default App;
