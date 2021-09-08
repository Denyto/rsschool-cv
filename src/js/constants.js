import * as config from '../../config/data';

export const DATA = config;
export const btnTemp = document.querySelectorAll('.options-button__temp');
export const btnRefresh = document.querySelector('.options-button__refresh');
export const selectLang = document.querySelector('.options-button__lang');
export const input = document.querySelector('input');
export const daysTemp = document.querySelectorAll('.group-days__temp_standby');
export const todayTemp = document.querySelector('.today__temp_standby');
export const todayHumidity = document.querySelector('.today__humidity');
export const todayWind = document.querySelector('.today__wind');
export const todayFeelsLike = document.querySelector('.today__feelslike');
export const todayDescription = document.querySelector('.today__now');
export const titleCity = document.querySelector('.title__city');
export const titleDate = document.querySelector('.title__date');
export const time = document.querySelector('.title__time');
export const groupDays = document.querySelectorAll('h3');
export const search = document.querySelector('.location__input');
export const searchBtn = document.querySelector('.location__input button');
export const icons = document.querySelector('.today__icons');

export const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// export const weekRu = [
//   'Воскресенье',
//   'Понедельник',
//   'Вторник',
//   'Среда',
//   'Четверг',
//   'Пятница',
//   'Суббота',
// ];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
