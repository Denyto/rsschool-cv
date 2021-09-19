import { App } from './src/js/app';
import * as constants from './src/js/constants';
import * as i18n from './src/js/i18n';

const app = new App();
let temporarySave = [];
app.init();
i18n.default();
// localStorage.clear();
function translatePage() {
  if (constants.selectLang.value === 'ru') {
    constants.groupDays.forEach((item) => temporarySave.push(item.innerHTML));
    temporarySave.push(constants.titleDate.innerHTML);
    temporarySave.push(constants.todayFeelsLike.innerHTML);
    temporarySave.push(constants.todayWind.innerText);
    temporarySave.push(constants.todayHumidity.innerText);
    temporarySave.push(constants.todayDescription.innerText);
    temporarySave.push(constants.Latitude.innerText);
    temporarySave.push(constants.Longitude.innerText);
    temporarySave.push(constants.titleCity.innerHTML);
    i18n.setLang();
    // localStorage.setItem('lastSelectLang', 'en');
  } else {
    constants.groupDays.forEach((elem, index) => {
      elem.innerHTML = temporarySave[index];
    });
    [
      constants.searchBtn.innerText,
      constants.input.placeholder,
      constants.titleDate.innerHTML,
      constants.todayFeelsLike.innerHTML,
      constants.todayWind.innerText,
      constants.todayHumidity.innerText,
      constants.todayDescription.innerText,
      constants.Latitude.innerText,
      constants.Longitude.innerText,
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
    temporarySave = [];
  }
}

function startAppInit() {
  app.init(constants.input.value, () => { temporarySave = []; console.log('clear', temporarySave); });
  constants.input.value = '';
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
  constants.selectLang.addEventListener('change', translatePage);

  constants.btnTemp.forEach((item) => {
    item.addEventListener('click', () => {
      constants.btnTemp.forEach((el) => el.classList.remove('options-button__temp_active'));
      item.classList.add('options-button__temp_active');
      localStorage.setItem('lastSelectTemp', item.innerText);
    });
  });
}

initListeners();
