import * as constants from './constants';
import * as main from '../../main';

function convertCoord(num) {
  const dd = Math.trunc(num);
  const mm = Math.trunc((num - dd).toFixed(7) * 60);
  const ss = Math.trunc(((num - dd).toFixed(7) * 60 - mm) * 60);
  return `${dd}°${mm}'${ss}"`;
}

export function init(
  setLatLonTime,
  setWeatherCurrentIcon,
  setWeatherGroupIcon,
  inputCoords,
  callback,
  tempInit,
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

    constants.latitude.innerText = `Latitude: ${convertCoord(latitude)}`;
    constants.longitude.innerText = `Longitude: ${convertCoord(longitude)}`;
    const urls = [
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=en&exclude=minutely,hourly&units=metric&appid=${constants.DATA.OPENWEATHERMAPKEY}`,
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=ru&exclude=minutely,hourly&units=metric&appid=${constants.DATA.OPENWEATHERMAPKEY}`,
    ];
    const requests = urls.map((url) => fetch(url));
    Promise.all(requests)
      .then((responses) => responses)
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((com) => {
        console.log('openweathermap:', com[0]);
        constants.todayTemp.classList.remove('today__temp_standby');
        constants.todayTemp.classList.add('today__temp');
        constants.daysTemp.forEach((elem) => {
          elem.classList.remove('group-days__temp_standby');
          elem.classList.add('group-days__temp');
        });
        constants.todayHumidity.innerText = `HUMIDITY: ${com[0].list[0].main.humidity}%`;
        constants.todayWind.innerText = `WIND: ${com[0].list[0].wind.speed}m/s`;
        constants.todayDescription.innerText = com[0].list[0].weather[0].description;
        constants.time.innerText = '-- : -- : --';
        setLatLonTime(com[0].city.timezone);
        setWeatherCurrentIcon(com[0].list[0].weather[0].icon);
        setWeatherGroupIcon(
          com[0].list[8].weather[0].icon,
          com[0].list[16].weather[0].icon,
          com[0].list[24].weather[0].icon,
        );
        tempInit(
          Math.round(com[0].list[8].main.temp),
          Math.round(com[0].list[16].main.temp),
          Math.round(com[0].list[24].main.temp),
          Math.round(com[0].list[0].main.temp),
          Math.floor(com[0].list[0].main.feels_like),
        );
        console.log('openweathermapRU:', com[1]);
        callback(com[1].list[0].weather[0].description);
        if (localStorage.getItem('lastSelectLang') === 'ru') {
          main.translatePage();
        }
      });
  });
}
