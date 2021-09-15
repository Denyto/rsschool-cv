import * as constants from './constants';
import * as temp from './temp';

export function init(
  setLatLonTime,
  setWeatherCurrentIcon,
  setWeatherGroupIcon,
  inputCoords,
  callback,
) {
  navigator.geolocation.getCurrentPosition((position) => {
    const [latitude, longitude] = inputCoords
      ? [inputCoords.lat, inputCoords.lng]
      : [position.coords.latitude, position.coords.longitude];

    mapboxgl.accessToken = constants.DATA.MAPBOXTOKEN;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/navigation-day-v1',
      center: [longitude, latitude],
      zoom: 6.1,
    });
    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
    map.addControl(new mapboxgl.FullscreenControl());

    document.getElementById('buttons').addEventListener('click', (event) => {
      const language = event.target.id.substr('button-'.length);
      map.setLayoutProperty('country-label', 'text-field', [
        'get',
        `name_${language}`,
      ]);
    });

    constants.Latitude.innerText = `Latitude: ${latitude.toFixed(2)}`;
    constants.Longitude.innerText = `Longitude: ${longitude.toFixed(2)}`;

    const urlGeoPosition = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=en&exclude=minutely,hourly&units=metric&appid=${constants.DATA.OPENWEATHERMAPKEY}`;
    const urlGeoPositionRu = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=ru&exclude=minutely,hourly&units=metric&appid=${constants.DATA.OPENWEATHERMAPKEY}`;
    fetch(urlGeoPosition)
      .then((response) => response.json())
      .then((com) => {
        console.log('openweathermap:', com);
        constants.todayTemp.classList.remove('today__temp_standby');
        constants.todayTemp.classList.add('today__temp');
        constants.daysTemp.forEach((elem) => {
          elem.classList.remove('group-days__temp_standby');
          elem.classList.add('group-days__temp');
        });
        constants.todayHumidity.innerText = `HUMIDITY: ${com.list[0].main.humidity}%`;
        constants.todayWind.innerText = `WIND: ${com.list[0].wind.speed}m/s`;
        constants.todayDescription.innerText = com.list[0].weather[0].description;

        setLatLonTime(com.city.timezone);
        setWeatherCurrentIcon(com.list[0].weather[0].icon);
        setWeatherGroupIcon(
          com.list[8].weather[0].icon,
          com.list[16].weather[0].icon,
          com.list[24].weather[0].icon,
        );
        temp.init(
          Math.round(com.list[8].main.temp),
          Math.round(com.list[16].main.temp),
          Math.round(com.list[24].main.temp),
          Math.round(com.list[0].main.temp),
          Math.floor(com.list[0].main.feels_like),
        );
      });
    fetch(urlGeoPositionRu)
      .then((response) => response.json())
      .then((data) => {
        constants.objectRu.descriptionRu = '';
        console.log('openweathermapRU:', data);
        callback(data.list[0].weather[0].description);
      });
  });
}
