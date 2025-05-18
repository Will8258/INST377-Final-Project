import { supabase } from "./supabaseClient"

async function getWeather(){

    const name = document.getElementById('cityInput').value

    const locationResults = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${name}`)
    const locationData = await locationResults.json()

    const lat = locationData.results[0].latitude
    const long = locationData.results[0].longitude


    const weatherResults = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,precipitation,uv_index,wind_speed_10m&current_weather=true`)
    const weatherData = await weatherResults.json()

        function pad(num) {
            return num.toString().padStart(2, '0');
        }

        const currentHour = new Date().getHours();
        const timeString = `${pad(currentHour)}:00:00`;

        const weatherObject = {
            time: timeString,
            city: name,
            latitude: lat,
            longitude: long,
            temperature: weatherData.current_weather.temperature,
            uv_index: weatherData.hourly.uv_index[currentHour],
            precipitation: weatherData.current_weather.precipitation,
            wind_speed: weatherData.current_weather.wind_speed
        }

        console.log(weatherObject)

          const { data, error } = await supabase
            .from("City & Weather")
            .insert([weatherObject]);

            if(error){
                console.log("There was an error: ", error)
            } else {
                console.log("Data was loaded successfully: ", data)
            }
        
    return weatherObject

}

export default getWeather;