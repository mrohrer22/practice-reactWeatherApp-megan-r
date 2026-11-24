import { useState } from 'react';
import CityForecast from './components/CityForecast';
import CityList from './components/CityList';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div>
      <h1>Weather Forecast App</h1>

      <CityList selectCity={setSelectedCity} />

      {selectedCity &&(
      <CityForecast city={selectedCity} />)}

    </div>
  )
}

export default App
