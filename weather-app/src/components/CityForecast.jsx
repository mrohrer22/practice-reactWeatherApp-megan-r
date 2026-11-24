import { useState, useEffect, useRef } from "react";

const weatherData = { 
    NewYork: { 
        summary: "Sunny, 25°C", 
        details: "Clear skies throughout the day with mild temperatures.", 
    }, 
    London: { 
        summary: "Cloudy, 18°C", 
        details: "Overcast with occasional light rain in the afternoon.", 
    }, 
    Tokyo: { 
        summary: "Rainy, 22°C", 
        details: "Continuous rain expected throughout the day.", 
    }, 
}; 

export default function CityForecast({selectedCity}) {
    console.log(selectedCity);
    useEffect (() => { 
        
        if (!selectedCity) {
            {"Please select a city"};
        } else {
            setSelectCity(weatherData[selectedCity])
        };
    }, [selectedCity])
    

    return (
        <div>
            <h2>{weatherData[selectedCity]} Forecast</h2>
        </div>
    )
}