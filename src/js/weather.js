import * as constants from './constants';
import * as temp from './temp';

export function init() {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const urlGeoPosition = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=f7d59d43b1eeefc141d7a88d5ca3dc4c`;
    fetch(urlGeoPosition)
      .then((response) => response.json())
      .then((com) => {
        constants.todayTemp.innerText = Math.round(com.current.temp);
        constants.todayHumidity.innerText = `HUMIDITY: ${com.current.humidity}%`;
        constants.todayWind.innerText = `WIND: ${com.current.wind_speed}m/s`;
        constants.todayFeelsLike.innerHTML = `<p>FEELS LIKE: ${Math.floor(com.current.feels_like)}</p>
        <div class="feels-like-temp"></div>`;
        constants.todayDescription.innerText = com.current.weather[0].description;
        [
          constants.daysTemp[0].innerText,
          constants.daysTemp[1].innerText,
          constants.daysTemp[2].innerText,
        ] = [
          Math.round(com.daily[1].temp.day),
          Math.round(com.daily[2].temp.day),
          Math.round(com.daily[3].temp.day),
        ];
        temp.init();
      });
  });
}
