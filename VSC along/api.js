// WEATHER API CODE ALONG
// This function Fetches weather data for a city entered by the user
function getWeatherData() {

// Ask the User to enter a city name
const cityName = prompt("Enter a city name:")

const apiKey = "442c307ab2e80c34d6a35308d348be8b"; 

// Construct the API URL to fetch weather data in celcisus and fahreinheit
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

// Fetch data from the API using a "the" constructed URL
fetch(apiUrl)
.then((response)=> response.json()) // Parsing the response as a JSON
.then((data)=>{
  console.log(data)

// Extract the temp in Celcius from the fetched data
const celsciusTemp = data.main.temp;
// Convert temp from Celcsius to Farenheit
const farenheitTemp = (celsciusTemp * 9) / 5 + 32;

const windSpeed = data.wind.speed;
const humidity = data.main.humidity;
const pressure = data.main.pressure;
const sunrise = data.sys.sunrise;
const sunset = data.sys.sunset;
const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

// Prepare the weather information to be displayed
const weatherInfo = `
<p>City: ${data.name} </p>
<p> Temperatire: ${celsciusTemp} °C / ${farenheitTemp} °F</p>
<p> Weather: ${data.weather[0].main} </p>
<p> Humidity: ${humidity}</p>
<p> Wind Speed: ${windSpeed} </p>
<p> Pressure: ${pressure} </p>
<p> Sunrise: ${sunrise} </p>
<p> Sunset: ${sunset} </p>
<img src="$ ${weatherIcon} </img>
`

// Display the weather info on the webpage

document.getElementById("weather-info").innerHTML = weatherInfo

  })

  .catch((error) =>{
  // Catched the errors if any during the fetch operation
  console.error("Error fetching weather data:", error);
});

}


// --------------------------------------------------------------------------------------------------------------------

// // Bring the Speech Recognition API into our application
// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRogniction;

// // Create a new instance of SpeechRecognition Object
// const recognition = new SpeechRecognition();
// // Set the propertioes of the objest
// recognition.interimRestuls = true;
// recognition.language = 'en-US';

// // Create a new paragraph element
// let p = document.createElement('p');
// // Store the html element with the class of words to a variable
// const words = document.querySelector('words');
// // Allow us to append the paragraph to the words of the element
// words.appendChild(p);

// recognition.addEventListener('result', e => {
//   console.log("Results from Speech Recognition");
//   const transcript = Array.from(e.results)
//     .map(result => result[0])
//     .map(result => result.transcript)
//     .join('');

//     of (e.results[0].isFinal){
//       p = document.createElement('p');
//       words.appendChild(p);
//     }
// });

// recognition.addEventListener('end', recognition.start);

// recognition.start();