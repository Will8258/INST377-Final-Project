import { useState } from "react"
import DisplayWeather from "../components/DisplayWeather"

function Project() {

  return (
    <div className="project">
      <h1>Project Page</h1>
      <p id="projectExplained">Here you will be able to get information based on the city you choose. You will be able to see 
        the temperature, UV index, precipitation, and wind speed. 
      </p>

      <DisplayWeather/>
    </div>
  )
}

export default Project