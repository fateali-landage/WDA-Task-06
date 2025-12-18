function savePreferences(city) {
  localStorage.setItem("defaultCity", city);
}

function loadPreferences() {
  return localStorage.getItem("defaultCity") || "London";
}
