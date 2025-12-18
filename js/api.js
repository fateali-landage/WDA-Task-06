const API_KEY = "YOUR_API_KEY_HERE";

async function fetchCurrentWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
}

async function fetchForecast(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Forecast not available");
  }

  return response.json();
}
