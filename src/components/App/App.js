import styles from './App.module.css'
import Search from '../Search/search';
import CurrentWeather from '../CurrentWeather/currentweather';

function App() {
  return (
    <div className="App">
      <Search />
      <CurrentWeather />
    </div>
  );
}

export default App;
