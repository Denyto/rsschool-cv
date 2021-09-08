/* eslint-disable class-methods-use-this */
import * as imageApi from './imageApi';
import * as title from './title';
import * as weather from './weather';
import * as constants from './constants';

export class App {
  constructor() {
    this.imageApi = imageApi;
    this.title = title;
    this.weather = weather;
  }

  init(city) {
    if (city) {
      this.imageApi.init(city);
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${constants.DATA.OPENCAGEDATAKEY}`)
        .then((response) => response.json())
        .then((com) => {
          console.log('api.opencagedata.com:', com);
          this.title.init(city, com.results[0].components.country_code);
          constants.time.innerText = '-- : -- : --';
          this.weather.init(
            this.title.setTime,
            this.title.setWeatherCurrentIcon,
            com.results[0].geometry,
          );
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
          );
        });
    }
  }
}
