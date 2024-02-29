
const weatherContainer = document.getElementById('currentWeather'); 
const weatherApp = document.getElementById('weatherApp');
const weatherForecast = document.getElementById('weatherForecast');

//OpenWeatherMap API Key
const API_Key = "d7d4c7f31782518c13777e3b897187e1"

// The city from where we want to get the weather
const city = 'Herning';

document.addEventListener('DOMContentLoaded', () => {
    // Your fetchWeather function here
    fetchWeather();
  });
//Fetch weather data 
const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Herning,Denmark&units=metric&APPID=d7d4c7f31782518c13777e3b897187e1`)
    .then(response => response.json())
    .then(json => {
        //extract relevant data from API response
        const cityName = json.name;
        const temperature = json.main.temp.toFixed(1)
        const description = json.weather[0].description;
        

        //Inject weather information into DOM
        const weatherHTML = `
        <p>City: ${cityName}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
      `;
      document.getElementById('currentWeather').innerHTML = weatherHTML;

    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('currentWeather').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
    });
}

  

