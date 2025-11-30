import React, { useState } from 'react'

const WeatherApp = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const API_KEY = "921e9532ec92746821908131cdbd995a"; // Your key - may need 1-2 hours to activate


    const getWeather = async () => {

        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

            const data = await res.json();
            console.log("API Response:", data);

            if (data.cod === 200 || data.cod === "200") {
                setWeather(data)
            }
            else {
                setWeather(null);
                alert(`Error: ${data.message || 'City not found'}\nCode: ${data.cod}`);
            }
        }
        catch (error) {
            console.error("error fetching weather:", error)
            alert("Network error: " + error.message);
        }
    }
    // console.log(getWeather)
    return (
        <>
            <div>WeatherApp</div>
            <input type='text' placeholder='Enter city name' value={city}
                onChange={(e) => setCity(e.target.value)} />
            <button onClick={getWeather}>Search</button>

            {weather && (
                <div>
                    <h1>{weather.name}</h1>
                    <h2>Temperature: {weather.main.temp}°C</h2>
                    <h2>Humidity: {weather.main.humidity}%</h2>
                    <h2>Wind Speed: {weather.wind.speed} m/s</h2>
                </div>
            )}
        </>
    )
}

export default WeatherApp