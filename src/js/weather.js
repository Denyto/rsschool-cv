import * as constants from './constants';
import * as temp from './temp';

export function init() {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVueXRvIiwiYSI6ImNrc2czamVxZDFnYjEzMm8zNW42cnV3YjgifQ.aHA6uOENuVW4FSblm2boNg';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/navigation-day-v1',
      center: [longitude, latitude],
      zoom: 6.1,
    });
    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
    map.addControl(new mapboxgl.FullscreenControl());

    document
      .getElementById('buttons')
      .addEventListener('click', (event) => {        
        const language = event.target.id.substr('button-'.length);
        map.setLayoutProperty('country-label', 'text-field', [
          'get',
          `name_${language}`,
        ]);
      });

    const urlGeoPosition = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=f7d59d43b1eeefc141d7a88d5ca3dc4c`;
    fetch(urlGeoPosition)
      .then((response) => response.json())
      .then((com) => {
        constants.todayTemp.classList.remove('today__temp_standby');
        constants.todayTemp.classList.add('today__temp');
        constants.daysTemp.forEach((elem) => {
          elem.classList.remove('group-days__day__temp_standby');
          elem.classList.add('group-days__day__temp');
        });
        constants.todayTemp.innerText = Math.round(com.current.temp);
        constants.todayHumidity.innerText = `HUMIDITY: ${com.current.humidity}%`;
        constants.todayWind.innerText = `WIND: ${com.current.wind_speed}m/s`;
        constants.todayFeelsLike.innerHTML = `<p>FEELS LIKE: ${Math.floor(
          com.current.feels_like,
        )}</p>
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
        temp.init(Math.floor(com.current.feels_like));
      });
  });
}
