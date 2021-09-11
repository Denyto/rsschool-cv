import { App } from './src/js/app';
import * as constants from './src/js/constants';
import * as i18n from './src/js/i18n';

const app = new App();
let groupDays = [];
app.init();
i18n.default();
console.log(constants.groupIcons);

function showSelectValue() {
  if (constants.selectLang.value === 'ru') {
    constants.groupDays.forEach((item) => groupDays.push(item.innerHTML));
    groupDays.push(constants.titleDate.innerHTML);
    groupDays.push(constants.todayFeelsLike.innerHTML);
    groupDays.push(constants.todayWind.innerText);
    groupDays.push(constants.todayHumidity.innerText);
    groupDays.push(constants.todayDescription.innerText);
    i18n.setLang();
  } else {
    constants.groupDays.forEach((elem, index) => {
      elem.innerHTML = groupDays[index];
    });
    [
      constants.searchBtn.innerText,
      constants.input.placeholder,
      constants.titleDate.innerHTML,
      constants.todayFeelsLike.innerHTML,
      constants.todayWind.innerText,
      constants.todayHumidity.innerText,
      constants.todayDescription.innerText,
    ] = [
      'search',
      'Search city or ZIP',
      groupDays[3],
      groupDays[4],
      groupDays[5],
      groupDays[6],
      groupDays[7],
    ];
    groupDays = [];
  }
}

function startAppInit() {
  app.init(constants.input.value);
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
  constants.selectLang.addEventListener('change', showSelectValue);
}

initListeners();
