// INIT WEATHER OBJECT

const weather = new Weather("New York");

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(res => console.log(res))
    .catch(data => console.log(data));
}
