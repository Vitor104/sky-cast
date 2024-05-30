import React, {useState} from 'react';
import styles from './App.module.css'
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/currentweather';
import Forecast from '../Forecast/forecast';


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

  const [weatherForecast, setWeatherForecast] = useState({});
  console.log(weatherForecast);

  const searchPressed = () => {
      fetch(`${API.base}weather?q=${searchLocation}&dt={formattedDate}&units=metric&APPID=${API.key}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
          setWeather(result)
      });
  };

  
if (searchPressed) {
  const searchForecast = () => {
    fetch(`${API.base}forecast?q=${searchPressed.result}&id&appid=${API.key}`)
      .then(resFor => resFor.json())
      .then(resultForecast => {
        console.log(resultForecast)
          setWeatherForecast(resultForecast)
      });
  };
  
} else {
  console.log('something goes wrong');
}

  

  

  const icon = weather.weather && weather.weather[0].icon;
  const iconURL = "http://openweathermap.org/img/w/" + icon + ".png";

  const iconForecastOne = weatherForecast.weather && weatherForecast.weather[0].icon;
  const iconForecastTwo = weatherForecast.weather && weatherForecast.weather[1].icon;
  const iconForecastThree = weatherForecast.weather && weatherForecast.weather[2].icon;
  const iconForecastFour = weatherForecast.weather && weatherForecast.weather[3].icon;

  const iconURLUm = "http://openweathermap.org/img/w/" + iconForecastOne + ".png";
  const iconURLDois = "http://openweathermap.org/img/w/" + iconForecastTwo + ".png";
  const iconURLTres = "http://openweathermap.org/img/w/" + iconForecastThree + ".png";
  const iconURLQuatro = "http://openweathermap.org/img/w/" + iconForecastFour + ".png";


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

      <Forecast 
      
      searchF={weatherForecast}
      setSearchF={setWeatherForecast}
      iconUm={iconURLUm}
      iconDois={iconURLDois}
      iconTres={iconURLTres}
      iconQuatro={iconURLQuatro}
      />

      </div>
  );
}

export default App;
