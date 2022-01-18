import i18next from 'i18next';
import * as constants from './constants';

export function setLang() {
  constants.groupDays.forEach((elem) => {
    elem.innerHTML = i18next.t(elem.innerHTML);
  });
  constants.searchBtn.innerText = i18next.t(constants.searchBtn.innerText);
  constants.input.placeholder = 'Поиск по городу . . .';
  constants.titleDate.innerHTML = `${i18next.t(
    constants.titleDate.innerHTML.split(' ')[0],
  )} ${constants.titleDate.innerHTML.split(' ')[1]} ${i18next.t(
    constants.titleDate.innerHTML.split(' ')[2],
  )}`;
  constants.todayFeelsLike.innerHTML = `<p>Ощущается как: ${
    constants.todayFeelsLike.innerText.split(': ')[1]
  }</p>
        <div class="today__circle"></div>`;
  constants.todayWind.innerText = `Ветер: ${constants.todayWind.innerText.split(': ')[1]}`;
  constants.todayHumidity.innerText = `Влажность: ${constants.todayHumidity.innerText.split(': ')[1]}`;
  constants.todayDescription.innerText = constants.objectRu.descriptionRu;
  constants.latitude.innerText = `Широта: ${constants.latitude.innerText.split(': ')[1]}`;
  constants.longitude.innerText = `Долгота: ${constants.longitude.innerText.split(': ')[1]}`;
  constants.titleCity.innerHTML = `${constants.objectRu.cityRu}, ${constants.objectRu.countryRu}`;
}

export default function () {
  i18next
    .init({
      lng: 'ru',
      resources: {
        ru: {
          translation: {
            Sunday: 'Воскресенье',
            Monday: 'Понедельник',
            Tuesday: 'Вторник',
            Wednesday: 'Среда',
            Thursday: 'Четверг',
            Friday: 'Пятница',
            Saturday: 'Суббота',
            SEARCH: 'поиск',
            Sun: 'Вск',
            Mon: 'Пнд',
            Tue: 'Втр',
            Wed: 'Срд',
            Thu: 'Чтв',
            Fri: 'Птн',
            Sat: 'Сбт',
            January: 'Января',
            February: 'Февраля',
            March: 'Марта',
            April: 'Апреля',
            May: 'Мая',
            June: 'Июня',
            July: 'Июля',
            August: 'Августа',
            September: 'Сентября',
            October: 'Октября',
            November: 'Ноября',
            December: 'Декабря',
            Latitude: 'Широта',
            Longitude: 'Долгота',
          },
        },
      },
      debug: false,
    })
    .then(() => {
    });
}
