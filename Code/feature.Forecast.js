const currentWeather = document.getElementById("currentWeather");
const tempContainer = document.getElementById("temperature");
const city = document.getElementById("city");
const time = document.getElementById("time");
const weather = document.getElementById("time");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

// Replace with your OpenWeatherMap API key
const API_Key = "d7d4c7f31782518c13777e3b897187e1";

// The city from where we want to get the weather
//const cityName = 'Herning';


const fetchWeather = async () => {
  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Herning,Denmark&units=metric&APPID=d7d4c7f31782518c13777e3b897187e1`);
      const json = await response.json();

      console.log(json)

            const temperature =(json.main.temp).toFixed(1);
            console.log(temperature);

            tempContainer.innerHTML = `
            ${temperature}`
            city.innerHTML = `${json.name}`

            const weatherDescription = (json.weather[0].description)
                weather.innerHTML = `
                ${weatherDescription}`
        } catch (error) {
            console.error('Error fetching weather data:', error);
            currentWeather.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        };

     }

fetchWeather();