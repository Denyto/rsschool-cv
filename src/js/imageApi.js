import * as constants from './constants';

export function init(city) {
  const cityInner = city;

  function random(length) {
    return Math.round(Math.random() * length);
  }

  function getImage(str) {
    const lacation = str || cityInner;
    fetch(`https://pixabay.com/api/?key=${constants.DATA.PIXABAYKEY}&q=${lacation}&image_type=photo`)
      .then((response) => response.json())
      .then((com) => {
        console.log('imageApi:', com);
        document.body.style.backgroundImage = `url("${
          com.hits[random(com.hits.length)].largeImageURL
        }")`;
      });
  }

  constants.btnRefresh.addEventListener('click', () => {
    constants.btnRefresh.classList.add('options-button__refresh_dis');
    setTimeout(
      () => constants.btnRefresh.classList.remove('options-button__refresh_dis'),
      500,
    );
    getImage();
  });

  getImage();
}
