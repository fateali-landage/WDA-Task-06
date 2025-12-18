const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const currentWeatherDiv = document.getElementById("currentWeather");
const forecastDiv = document.getElementById("forecast");
const loadingText = document.getElementById("loading");
const errorText = document.getElementById("error");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    loadWeather(city);
  }
});

async function loadWeather(city) {
  showLoading();
  try {
    savePreferences(city);

    const current = await fetchCurrentWeather(city);
    const forecast = await fetchForecast(city);

    displayCurrentWeather(current);
    displayForecast(forecast);
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoading();
  }
}

function displayCurrentWeather(data) {
  currentWeatherDiv.classList.remove("hidden");
  currentWeatherDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}

function displayForecast(data) {
  forecastDiv.innerHTML = "";
  const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));

  daily.forEach(day => {
    const card = document.createElement("div");
    card.className = "forecast-card";
    card.innerHTML = `
      <p>${new Date(day.dt_txt).toDateString()}</p>
      <p>${day.main.temp} °C</p>
      <p>${day.weather[0].main}</p>
    `;
    forecastDiv.appendChild(card);
  });
}

function showLoading() {
  loadingText.classList.remove("hidden");
  errorText.classList.add("hidden");
}

function hideLoading() {
  loadingText.classList.add("hidden");
}

function showError(message) {
  errorText.textContent = message;
  errorText.classList.remove("hidden");
}

// Load default city on page load
window.addEventListener("load", () => {
  const city = loadPreferences();
  cityInput.value = city;
  loadWeather(city);
});
