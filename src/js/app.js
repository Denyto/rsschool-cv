/* eslint-disable class-methods-use-this */
import * as imageApi from './imageApi';
import * as title from './title';
import * as weather from './weather';

export class App {
  constructor() {
    this.imageApi = imageApi;
  }

  init() {
    fetch('https://ipinfo.io?token=ab67f61347a9fa')
      .then((response) => response.json())
      .then((com) => {
        this.imageApi.init(com.city);
        title.init(com.city, com.country);
        weather.init();
      });
  }
}
