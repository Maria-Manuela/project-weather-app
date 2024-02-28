
//OpenWeatherMap API Key
const API_Key = "d7d4c7f31782518c13777e3b897187e1"

// The city from where we want to get the weather
const city = 'Herning';

//Fetch weather data f
const getData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Herning,Denmark&units=metric&APPID=d7d4c7f31782518c13777e3b897187e1`)
    .then(response => response.json())
    .then(data => {
        //extract relevant data from API response
        const cityName = data.name;
        const temperature = data.main.temp.toFixed(1)
        const description = data.weather[0].description;


        console.log('City:', cityName)
        console.log('Temperature:', temperature +  '°C')
        console.log('Description:', description)
        

        //Inject wweather information into DOM
        const weatherHTML = `
        <p>City: ${cityName}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
      `;
        document.getElementsById('weather-info').innerHTML = weatherHTML;
    
    })
    .catch(error => {
        console.error('Error fetching weather data:' , error);
        document.getElementById('weather-info').innerHTML = '<p>Error fetching weather data. Please try again later. </p>'
    })
}

getData()

