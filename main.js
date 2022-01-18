/* eslint-disable no-const-assign */
import { App } from './src/js/app';
import * as constants from './src/js/constants';
import * as i18n from './src/js/i18n';

const app = new App();
let temporarySave = [];
app.init();
i18n.default();

if (localStorage.getItem('lastSelectLang')) {
  constants.selectLang.value = localStorage.getItem('lastSelectLang');
}

export function translatePage() {
  if (constants.selectLang.value === 'ru') {
    constants.groupDays.forEach((item) => temporarySave.push(item.innerHTML));
    temporarySave.push(constants.titleDate.innerHTML);
    temporarySave.push(constants.todayFeelsLike.innerHTML);
    temporarySave.push(constants.todayWind.innerText);
    temporarySave.push(constants.todayHumidity.innerText);
    temporarySave.push(constants.todayDescription.innerText);
    temporarySave.push(constants.latitude.innerText);
    temporarySave.push(constants.longitude.innerText);
    temporarySave.push(constants.titleCity.innerHTML);
    i18n.setLang();
  } else {
    constants.groupDays.forEach((em, index) => { em.innerHTML = temporarySave[index]; });
    [
      constants.searchBtn.innerText,
      constants.input.placeholder,
      constants.titleDate.innerHTML,
      constants.todayFeelsLike.innerHTML,
      constants.todayWind.innerText,
      constants.todayHumidity.innerText,
      constants.todayDescription.innerText,
      constants.latitude.innerText,
      constants.longitude.innerText,
      constants.titleCity.innerHTML,
    ] = [
      'search',
      'Search city or ZIP',
      temporarySave[3],
      temporarySave[4],
      temporarySave[5],
      temporarySave[6],
      temporarySave[7],
      temporarySave[8],
      temporarySave[9],
      temporarySave[10],
    ];
    temporarySave.length = 0;
  }
}

function startAppInit() {
  app.init(constants.input.value, () => {
    temporarySave.length = 0;
  });
  constants.input.value = '';
}

let i = 1;
function showImages() {
  const imageList = document.querySelectorAll('img');
  imageList.forEach((it) => it.classList.remove('showed'));
  if (!imageList[i]) {
    i = 1;
  }
  imageList[i].classList.add('showed');
  i += 1;
  if (i >= imageList.length) {
    i = 0;
  }
}

function initListeners() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && constants.input.value !== '') {
      startAppInit();
    }
  });
  constants.search.addEventListener('click', (e) => {
    if (
      (e.target.innerText === 'SEARCH' || e.target.innerText === 'ПОИСК')
      && constants.input.value !== ''
    ) {
      startAppInit();
    }
  });
  constants.selectLang.addEventListener('change', () => {
    translatePage();
    localStorage.setItem('lastSelectLang', constants.selectLang.value);
  });

  constants.btnTemp.forEach((item) => {
    item.addEventListener('click', () => {
      constants.btnTemp.forEach((el) => el.classList.remove('options-button__temp_active'));
      item.classList.add('options-button__temp_active');
      localStorage.setItem('lastSelectTemp', item.innerText);
    });
  });

  constants.btnRefresh.addEventListener('click', () => {
    showImages();
    constants.btnRefresh.classList.add('options-button__refresh_dis');
    setTimeout(
      () => constants.btnRefresh.classList.remove('options-button__refresh_dis'),
      500,
    );
  });
}

initListeners();
