const weatherDisplay = document.querySelector(".weather");
const weatherForm = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");

// Fetch weather data from API
const fetchWeather = async (city) => {
  // Use server with the client app
  const url = `/api?q=${city}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === "404") {
    alert("City not found");
    return;
  }

  if (data.cod === 401) {
    alert("Invalid API Key");
    return;
  }

  const displayData = {
    city: data.name,
    temp: kelvinToFahrenheit(data.main.temp),
    description:
      data.weather && data.weather[0] ? data.weather[0].description : "",
    details: {
      feels_like: kelvinToFahrenheit(data.main.feels_like),
      humidity: data.main.humidity,
      wind_speed: Math.round(data.wind.speed * 2.237), // Convert m/s to mph
    },
  };

  addWeatherToDOM(displayData);
};

// Add display data to DOM
const addWeatherToDOM = (data) => {
  weatherDisplay.innerHTML = `
   <div class="weather-card">
     <h2 class="weather-city">${data.city}</h2>
     <div class="weather-temp">${data.temp}°F</div>
     ${
       data.description
         ? `<p class="weather-description">${data.description}</p>`
         : ""
     }
     ${
       data.details
         ? `
       <div class="weather-details">
         ${
           data.details.feels_like
             ? `
           <div class="weather-detail-item">
             <div class="detail-label">Feels Like</div>
             <div class="detail-value">${data.details.feels_like}°F</div>
           </div>
         `
             : ""
         }
         ${
           data.details.humidity
             ? `
           <div class="weather-detail-item">
             <div class="detail-label">Humidity</div>
             <div class="detail-value">${data.details.humidity}%</div>
           </div>
         `
             : ""
         }
         ${
           data.details.wind_speed
             ? `
           <div class="weather-detail-item">
             <div class="detail-label">Wind Speed</div>
             <div class="detail-value">${data.details.wind_speed} mph</div>
           </div>
         `
             : ""
         }
       </div>
     `
         : ""
     }
   </div>
 `;
  cityInput.value = "";
};

// Convert Kelvin to Fahrenheit
const kelvinToFahrenheit = (temp) => {
  return Math.ceil(((temp - 273.15) * 9) / 5 + 32);
};

// Event listener for form submission
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cityInput.value === "") {
    alert("Please enter a city");
  } else {
    fetchWeather(cityInput.value);
  }
});

// Initial fetch
fetchWeather("Udaipur");
