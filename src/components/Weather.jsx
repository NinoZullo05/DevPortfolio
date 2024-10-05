import React, { useState, useEffect } from "react";
import { Search, Droplets, Wind } from "lucide-react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const baseUrl = process.env.REACT_APP_WEATHER_API_BASE_URL;

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${baseUrl}current.json?key=${apiKey}&q=${cityName}&aqi=no`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeatherData({
        temp_c: data.current.temp_c,
        location: `${data.location.name}, ${data.location.country}`,
        humidity: data.current.humidity,
        wind_kph: data.current.wind_kph,
        condition: data.current.condition.text,
      });
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  useEffect(() => {
    fetchWeather("Pristina");
  }, []);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="relative">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              className="w-full py-2 pl-4 pr-10 rounded-full bg-white bg-opacity-20 text-white placeholder-white focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button type="submit" className="absolute right-2 top-2">
              <Search className="text-white" size={20} />
            </button>
          </div>
        </form>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-300">{error}</p>}

        {weatherData && !loading && !error && (
          <div>
            <div className="flex justify-between items-center">
              <div className="text-4xl font-bold">{weatherData.temp_c}°C</div>
              <div className="text-right">
                <div className="text-xl">{weatherData.condition}</div>
                <div className="text-sm">{weatherData.location}</div>
              </div>
            </div>

            <div className="flex justify-between mt-4 text-sm">
              <div className="flex items-center">
                <Droplets className="mr-1" size={18} />
                <span>{weatherData.humidity}% Humidity</span>
              </div>
              <div className="flex items-center">
                <Wind className="mr-1" size={18} />
                <span>{weatherData.wind_kph} Km/h</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
