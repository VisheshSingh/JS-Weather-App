// INIT WEATHER OBJECT
const weather = new Weather("New York");
// INIT UI OBJECT
const ui = new UI();

// Change location event
document.getElementById("w-change-btn").addEventListener("click", function(e) {
  const city = document.getElementById("city").value;

  // update the city
  weather.changeLocation(city);

  // get updated weather
  getWeather();

  //close modal
  $("#locModal").modal("hide");
});
// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(res => ui.paint(res))
    .catch(data => console.log(data));
}
