import React, { useEffect, useRef, useState } from 'react';
import getWeather from '../utils/WeatherLogic';

function DisplayWeather(){

    const [city, setCity] = useState('')
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const handleClick = async () => {

        try {
            const weather = await getWeather()
            setData(weather)
        } catch (e) {
            setError("No Results Found For: " + city)
            setData(null)
        }

    }

    return(
        <div>

            <input id="cityInput" placeholder="Enter Your City Here..." required></input>

            <div id="weatherContainer">

            <button id="submit" onClick={handleClick}>Submit</button>
                
            </div>

        {data ? (
        <>
          <div id="time">
            <h1>The current time is {data.time}</h1>
          </div>
          <div id="data">
            <h2>
              The City You Chose Is: {data.city ?? 'N/A'}, Temperature: {data.temperature ?? 'N/A'}, 
              UV Index: {data.uv_index ?? 'N/A'}, Precipitation: {data.precipitation ?? 'N/A'}, 
              Wind Speed: {data.wind_speed ?? 'N/A'}
            </h2>
          </div>
        </>
      ) : (
        <h2>Your Weather Stats Will Display Here</h2>
      )}
        </div>
    )

}

export default DisplayWeather

