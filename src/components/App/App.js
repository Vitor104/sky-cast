import React, {useState} from 'react';
import styles from './App.module.css'
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/currentweather';
import Forecast from '../Forecast/forecast';
import imageStorm from '../storm.png';

function App() {

  


  return (
    <div className="App">
      <Search  />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default App;
