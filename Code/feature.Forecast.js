const overview = document.getElementById("overview")
const forecastTable = document.getElementById("forecastTable")
const weeklyForecast = document.getElementById("weeklyForecast")
const weatherContainer = document.getElementById("weatherContainer")
const body = document.body; // access to the body of the HTML document


// OpenWeatherMap API Key
const API_Key = "d7d4c7f31782518c13777e3b897187e1";

// The city from where we want to get the weather
const cityName = 'Herning';

document.addEventListener('DOMContentLoaded', () => {
    // Your fetchWeather function here
    fetchWeather();
});

// Fetch weather data 
const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Herning,Denmark&units=metric&APPID=d7d4c7f31782518c13777e3b897187e1`)
        .then(response => response.json())
        .then(json => {
            // Extract relevant data from API response
            const cityName = json.name;
            const temperature = json.main.temp.toFixed(1);
            const description = json.weather[0].description;
            const sunriseTime = (new Date(json.sys.sunrise * 1000)).toLocaleTimeString('da-DK', {hour: '2-digit', minute: '2-digit'});
            const sunsetTime = (new Date(json.sys.sunset * 1000)).toLocaleTimeString('da-DK', {hour: '2-digit', minute: '2-digit'});

            // Inject weather information into DOM
            const weatherHTML = `
                <p>${cityName}</p>
                <p>${temperature}°C</p>
                <p>${description}</p>
                <p>Sunrise: ${sunriseTime}</p>
                <p>Sunset: ${sunsetTime}</p>
            `;
            weatherContainer.innerHTML = weatherHTML;

            // Call function to fetch and display forecast
            //fetchForecast(city);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherContainer.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        });
}



/*// Function to fetch forecast data 
const fetchForecast = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_Key}`)
        .then(response => response.json())
        .then(json => {
            // Filtered forecast data to only include info for 12:00 PM each day
            const filteredForecast = json.list.filter(data => {
                const forecastDate = new Date(data.dt * 1000); // Convert timestamp to Date object
                return forecastDate.getHours() === 12; // Filter data for 12:00 PM only
            });/*

          /*  // Inject forecast information into DOM
            filteredForecast.forEach((data, index) => {
                const forecastDate = new Date(data.dt * 1000);
                const dayOfWeek = forecastDate.toLocaleDateString('en-US', { weekday: 'short' });
                const minTemp = data.main.temp_min.toFixed(1);
                const maxTemp = data.main.temp_max.toFixed(1);
                const description = data.weather[0].description;
/*
           /*     //get the forecast card element corresponding to the current day
                const card = weatherForecast.children[index];
/*
                // Inject forecast information into HTML
                const forecastHTML = `
                    <div class="forecast-card">
                        <h3>${dayOfWeek}</h3>
                        <p class="min-temp">${minTemp}°C</p>
                        <p class="max-temp${maxTemp}°C</p>
                        <p>${description}</p>
                    </div>
                `;
/*
                //append forecast card HTML to weatherForecast container
                weatherForecast.innerHTML += forecastHTML;
            });   
        })/*
        .catch(error => {
            console.error('Error fetching forecast data:', error);
            weatherForecast.innerHTML = '<p>Error fetching forecast data. Please try again later.</p>';
        });
/*/
