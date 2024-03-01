const currentWeather = document.getElementById("currentWeather");
const temperature = document.getElementById("temperature");
const city = document.getElementById("cityName");
const time = document.getElementById("currentTime");
const weatherDescription = document.getElementById("weatherDescription");
const sunrise = document.getElementById("sunriseTime");
const sunset = document.getElementById("sunsetTime");

const forecast = document.getElementById("weatherForecast");
const weatherIcon = document.getElementById("forecastWeatherIcon");

// Replace with your OpenWeatherMap API key
const API_Key = "4f1f799026ecba0bd7e986152b35fba5";

// The city from where we want to get the weather
const cityName = "Herning";


const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Herning,Denmark&units=metric&appid=4f1f799026ecba0bd7e986152b35fba5`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
  
        // Current temperature
        const temp = json.main.temp;
        const roundedTemp = temp.toFixed(1); // This will round to one decimal place
        console.log(roundedTemp);
  
        currentTemp.innerHTML = `${roundedTemp}°C`;
        console.log(`${roundedTemp}°C`);
        city.innerHTML = `${json.name}`;

        const weatherDescription = json.weather[0].description;
        weather.innerHTML = `${weatherDescription}`

        let { icon } = json.weather[0];
        forecastWeatherIcon.innerHTML =`<img src="design1/assets/group16.png">`
        

        const sunriseData = new Date((json.sys.sunrise + json.timezone) *1000);

        const sunriseTime = sunriseData.toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
        });

        const sunsetData = new Date((json.sys.sunset + json.timezone) *1000);

        const sunsetTime = sunsetData.toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
        });

        sunriseTime.innerHTML = `
        <p>sunrise</p>${sunriseTime}
        `;
        sunsetTime.innerHTML = `
        <p>sunset</p>${sunsetTime}
        `; 
  })
  .catch((error) => console.log("Error. Try again!", error))
};

const fetchForecast = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Herning,DK&units=metric&appid=4f1f799026ecba0bd7e986152b35fba5`);
      const data = await response.json();
  
      // Filter forecast data for 12:00 each day
      const forecastData = data.list.filter(forecast => {
        const forecastDate = new Date(forecast.dt * 1000);
        return forecastDate.getHours() === 12;
      });
  
      // Display forecast for each day
      forecastData.forEach(forecast => {
        // Extract relevant information from forecast object
        const forecastDate = new Date(forecast.dt * 1000);
        const weekday = forecastDate.toLocaleDateString('da-DK', { weekday: 'short' });
        const temperature = forecast.main.temp;
        const humidity = forecast.main.humidity;
  
        // Create HTML elements to display forecast
        const forecastElement = document.createElement('div');
        forecastElement.innerHTML = `
          <p>Day: ${weekday}</p>
          <p>Temperature: ${temperature}°C</p>
          <p>Humidity: ${humidity}%</p>
        `;
  
        // Append forecast element to container
        forecastContainer.appendChild(forecastElement);
      });
    } catch (error) {
      console.error('Error fetching forecast:', error);
    }
  }
  
  fetchWeather()
  fetchForecast();