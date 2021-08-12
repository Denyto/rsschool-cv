/* eslint-disable class-methods-use-this */
import * as imageApi from './imageApi';
import * as temp from './temp';
import * as today from './today';

export class App {
  constructor() {
    this.imageApi = imageApi;
  }

  init() {
    fetch('https://ipinfo.io?token=ab67f61347a9fa')
      .then((response) => response.json())
      .then((com) => {
        imageApi.init(com.city);
        today.init(com.city);
        temp.init();
      });
  }
}
