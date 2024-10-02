import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = () => {
    // Mock fetching weather data
    setWeatherData({ temperature: 25, description: "Sunny" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Weather</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2"
        placeholder="Enter city"
      />
      <button
        onClick={fetchWeather}
        className="ml-2 p-2 bg-light-purple dark:bg-dark-purple text-white"
      >
        Get Weather
      </button>
      {weatherData && (
        <div className="mt-4">
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Description: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
