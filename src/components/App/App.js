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
          setWeather(result)
      });

   };

  

  
  const searchForecast = () => {
    fetch(`${API.base}forecast?q=${searchLocation}&units=metric&id&appid=${API.key}`)
      .then(resFor => resFor.json())
      .then(resultForecast => {
        console.log(resultForecast)
          setWeatherForecast(resultForecast)
      });
  };


  

  

  const icon = weather.weather && weather.weather[0].icon;
  const iconURL = "http://openweathermap.org/img/w/" + icon + ".png";

  /* FORECAST   */

  const iconForecastOne = weatherForecast.list && weatherForecast.list[0].weather[0].icon;
  const iconForecastTwo = weatherForecast.list && weatherForecast.list[1].weather[0].icon;
  const iconForecastThree = weatherForecast.list && weatherForecast.list[2].weather[0].icon;
  const iconForecastFour = weatherForecast.list && weatherForecast.list[3].weather[0].icon;

  const iconURLUm = "http://openweathermap.org/img/w/" + iconForecastOne + ".png";
  const iconURLDois = "http://openweathermap.org/img/w/" + iconForecastTwo + ".png";
  const iconURLTres = "http://openweathermap.org/img/w/" + iconForecastThree + ".png";
  const iconURLQuatro = "http://openweathermap.org/img/w/" + iconForecastFour + ".png";



  let dayTxt = {
    dayOne: weatherForecast.list && weatherForecast.list[0].dt_txt,
    dayTwo: weatherForecast.list && weatherForecast.list[1].dt_txt,
    dayThree: weatherForecast.list && weatherForecast.list[2].dt_txt,
    dayFour: weatherForecast.list && weatherForecast.list[3].dt_txt,
  }

  let dayTemp = {
    firstTemp: weatherForecast.list && weatherForecast.list[0].main.temp,
    secondTemp: weatherForecast.list && weatherForecast.list[1].main.temp,
    thirdTemp: weatherForecast.list && weatherForecast.list[2].main.temp,
    fourthTemp: weatherForecast.list && weatherForecast.list[3].main.temp,
  }

  return (
    <div className="App">

      <CurrentWeather 
      buttonPressed={searchPressed} 
      searchForecast={searchForecast}
      searchL={searchLocation}
      setSearchL={setSearchLocation}
      date={formattedDate}
      icon={iconURL}
      weatherDisplay={weather}
      />

<Forecast 
      buttonPressed={searchPressed} 
      searchForecast={searchForecast}
      searchF={weatherForecast}
      setSearchF={setWeatherForecast}
      iconUm={iconURLUm}
      iconDois={iconURLDois}
      iconTres={iconURLTres}
      iconQuatro={iconURLQuatro}
      dayTxt={dayTxt}
      dayTemp={dayTemp}
      />


      </div>

  );
}

export default App;

/*
<Forecast 
      buttonPressed={searchPressed} 
      searchForecast={searchForecast}
      searchF={weatherForecast}
      setSearchF={setWeatherForecast}
      iconUm={iconURLUm}
      iconDois={iconURLDois}
      iconTres={iconURLTres}
      iconQuatro={iconURLQuatro}
      dayTxt={dayTxt}
      dayTemp={dayTemp}
      />


*/