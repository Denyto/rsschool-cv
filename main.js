import { App } from './src/js/app';
import * as constants from './src/js/constants';
import * as i18n from './src/js/i18n';

const app = new App();
let groupDays = [];
app.init();
i18n.default();

function showSelectValue() {
  if (constants.selectLang.value === 'ru') {
    constants.groupDays.forEach((item) => groupDays.push(item.innerHTML));
    i18n.setLang();
  } else {
    constants.groupDays.forEach((elem, index) => {
      elem.innerHTML = groupDays[index];
      constants.searchBtn.innerText = 'search';
      constants.input.placeholder = 'Search city or ZIP';
    });
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
    if (e.target.innerText === 'SEARCH' && constants.input.value !== '') {
      startAppInit();
    }
  });
  constants.selectLang.addEventListener('change', showSelectValue);
}

initListeners();
