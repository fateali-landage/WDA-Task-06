const API_KEY = "1d510ffb171879c8be6f38649fd1b2e7";

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
