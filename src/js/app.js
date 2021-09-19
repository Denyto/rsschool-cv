/* eslint-disable class-methods-use-this */
import * as imageApi from './imageApi';
import * as title from './title';
import * as weather from './weather';
import * as temp from './temp';
import * as constants from './constants';

export class App {
  constructor() {
    this.imageApi = imageApi;
    this.title = title;
    this.weather = weather;
    this.temp = temp;
  }

  init(city, callback) {
    if (city) {
      this.imageApi.init(city);
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&language=en&key=${constants.DATA.OPENCAGEDATAKEY}`,
      )
        .then((response) => response.json())
        .then((com) => {
          console.log('api.opencagedata.com:', com);
          constants.selectLang.value = 'en';
          this.title.init(city, com.results[0].components.country_code);
          constants.time.innerText = '-- : -- : --';
          this.weather.init(
            this.title.setTime,
            this.title.setWeatherCurrentIcon,
            this.title.setWeatherGroupIcon,
            com.results[0].geometry,
            (arg) => {
              constants.objectRu.descriptionRu = arg;
            },
            this.temp.init,
          );
          callback();
        });
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&language=ru&key=${constants.DATA.OPENCAGEDATAKEY}`,
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('api.opencagedata.comRU:', data);
          constants.objectRu.cityRu = '';
          constants.objectRu.countryRu = '';
          constants.objectRu.cityRu = data.results[0].components.city;
          constants.objectRu.countryRu = data.results[0].components.country;
        });
    } else {
      fetch(`https://ipinfo.io?token=${constants.DATA.IPINFOTOKEN}`)
        .then((response) => response.json())
        .then((com) => {
          console.log('ipinfo:', com);
          this.imageApi.init(com.city);
          this.title.init(com.city, com.country);
          this.weather.init(
            this.title.setTime,
            this.title.setWeatherCurrentIcon,
            this.title.setWeatherGroupIcon,
            '',
            (arg) => {
              constants.objectRu.descriptionRu = arg;
            },
            this.temp.init,
          );
          fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${com.city}&language=ru&key=${constants.DATA.OPENCAGEDATAKEY}`,
          )
            .then((response) => response.json())
            .then((data) => {
              console.log('api.opencagedata.comRU:', data);
              constants.objectRu.cityRu = '';
              constants.objectRu.countryRu = '';
              constants.objectRu.cityRu = data.results[0].components.city;
              constants.objectRu.countryRu = data.results[0].components.country;
            });
        });
    }
  }
}
