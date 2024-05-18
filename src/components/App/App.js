import styles from './App.module.css'
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/currentweather';
import Forecast from '../Forecast/forecast';

function App() {
  return (
    <div className="App">
      <Search />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default App;
