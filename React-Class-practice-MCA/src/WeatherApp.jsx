import React, { useState } from 'react'

const WeatherApp = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const API_KEY = "35caf62b8c49b8d895d272c434a3daed";


    const getWeather = async () => {

        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

            const data = await res.json();
            console.log(data);

            if (data.cod === 200) {
                setWeather(data)
            }
            else {
                setWeather(null);
                alert("City not found");
            }
        }
        catch (error) {
            console.error("error fetching weather:", error)
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
                    {/* <h1>{weather.name}</h1> */}
                    <h2>Temparature: {weather.main.temp}°C</h2>
                    <h2>Humidity: {weather.main.humidity}</h2>
                    <h2>Wind Speed: {weather.wind.speed}</h2>
                </div>
            )}
            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#888' }}>
                Designed by Kulsum Banoo
            </div>
        </>
    )
}

export default WeatherApp