// INIT WEATHER OBJECT
const weather = new Weather("New York");
// INIT UI OBJECT
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(res => ui.paint(res))
    .catch(data => console.log(data));
}
