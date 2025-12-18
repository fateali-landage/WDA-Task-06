const API_KEY = "fd7bd79936cc0e2b1b3bdc271df2d729";

async function fetchCurrentWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Unable to fetch weather");
  }

  return response.json();
}

async function fetchForecast(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Unable to fetch forecast");
  }

  return response.json();
}
