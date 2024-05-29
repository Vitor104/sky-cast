import React, {useState} from 'react';
import styles from './App.module.css'
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/currentweather';
import Forecast from '../Forecast/forecast';
import imageStorm from '../storm.png';

function App() {

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1; 
  let currentDay = currentDate.getDate();
  let formattedDate = currentDay + "-" + currentMonth + "-" + currentYear;

  const API = {
      key: "99600cffaca177235cff252ce19ca928",
      base: "https://api.openweathermap.org/data/2.5/",
    }


    
  const [searchLocation, setSearchLocation] = useState(null);   
  
  
  const [weather, setWeather] = useState({});
  console.log(weather);

  const searchPressed = () => {
      fetch(`${API.base}weather?q=${searchLocation}&units=metric&APPID=${API.key}`)
      .then(res => res.json())
      .then(result => {
          setWeather(result)
      });
  };

  const icon = weather.weather && weather.weather[0].icon;
  const iconURL = "http://openweathermap.org/img/w/" + icon + ".png";


  return (
    <div className="App">
      <CurrentWeather 
      buttonPressed={searchPressed} 
      searchL={searchLocation}
      setSearchL={setSearchLocation}
      date={formattedDate}
      icon={iconURL}
      weatherDisplay={weather}
      />
      <Forecast />
      </div>
  );
}

export default App;
