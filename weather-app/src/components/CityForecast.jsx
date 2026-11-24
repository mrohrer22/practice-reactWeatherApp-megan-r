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
    const [forecast, setForecast] = useState({});
    const [showDetails, setShowDetails] = useState(false);

    const detailsRef = useRef(null);

    useEffect (() => { 
        
        if (selectedCity) {
            setForecast(weatherData[selectedCity]);
            
        } else {
            setForecast({
            summary: "City not found",
            });
        }
            setShowDetails(false);
        }, [selectedCity]);
    
    function viewDetails() {
        setShowDetails(true);
  }

    return (
        <div>
            <h2>{selectedCity} Forecast</h2>
                <p>{forecast.summary}</p>
                <button onClick={viewDetails}>View Details</button>
                {showDetails && (
                <div ref={detailsRef}>
                    <h3>Weather Details</h3>
                    <p>{forecast.details}</p>
                </div>
                )}
        </div>
    )
}