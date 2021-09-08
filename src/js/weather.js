import * as constants from './constants';
import * as temp from './temp';

export function init(setLatLonTime, setWeatherCurrentIcon, inputCoords) {
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

    const urlGeoPosition = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&lang=en&exclude=minutely,hourly&units=metric&appid=${constants.DATA.OPENWEATHERMAPKEY}`;
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
        constants.todayTemp.innerText = Math.round(com.current.temp);
        constants.todayHumidity.innerText = `HUMIDITY: ${com.current.humidity}%`;
        constants.todayWind.innerText = `WIND: ${com.current.wind_speed}m/s`;
        constants.todayFeelsLike.innerHTML = `<p>FEELS LIKE: ${Math.floor(
          com.current.feels_like,
        )}</p>
        <div class="today__circle"></div>`;
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
        setLatLonTime(com.timezone_offset);
        setWeatherCurrentIcon(com.current.weather[0].icon);
      });
  });
}
