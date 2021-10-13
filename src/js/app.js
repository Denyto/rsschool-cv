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
      const urls = [
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&language=en&key=${constants.DATA.OPENCAGEDATAKEY}`,
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&language=ru&key=${constants.DATA.OPENCAGEDATAKEY}`,
      ];
      const requests = urls.map((url) => fetch(url));
      Promise.all(requests)
        .then((responses) => responses)
        .then((responses) => Promise.all(responses.map((res) => res.json())).catch(() => {
        }))
        .then((data) => {
          if (!data[1].results[0].components.city) {
            return;
          }
          this.imageApi.init(city);
          this.title.init(
            `${data[0].results[0].geometry.lat},${data[0].results[0].geometry.lng}`,
            data[0].results[0].components.city,
          );
          constants.time.innerText = '-- : -- : --';
          this.weather.init(
            this.title.setTime,
            this.title.setWeatherCurrentIcon,
            this.title.setWeatherGroupIcon,
            data[0].results[0].geometry,
            (arg) => {
              constants.objectRu.descriptionRu = arg;
            },
            this.temp.init,
          );
          constants.objectRu.cityRu = '';
          constants.objectRu.countryRu = '';
          constants.objectRu.cityRu = data[1].results[0].components.city;
          constants.objectRu.countryRu = data[1].results[0].components.country;
          callback();
        })
        .catch(() => {
        });
    } else {
      fetch(`https://ipinfo.io?token=${constants.DATA.IPINFOTOKEN}`)
        .then((response) => response.json())
        .then((com) => {
          fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${com.city}&language=ru&key=${constants.DATA.OPENCAGEDATAKEY}`,
          )
            .then((response) => response.json())
            .then((data) => {
              constants.objectRu.cityRu = '';
              constants.objectRu.countryRu = '';
              constants.objectRu.cityRu = data.results[0].components.city;
              constants.objectRu.countryRu = data.results[0].components.country;

              this.weather.init(
                this.title.setTime,
                this.title.setWeatherCurrentIcon,
                this.title.setWeatherGroupIcon,
                '',
                (arg) => {
                  constants.objectRu.descriptionRu = '';
                  constants.objectRu.descriptionRu = arg;
                },
                this.temp.init,
              );
            });
          this.imageApi.init(com.city);
          this.title.init(com.loc);
        })
        .catch(() => {
        });
    }
  }
}
