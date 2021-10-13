import * as constants from './constants';

export function init(city) {
  const cityInner = city;

  function getImage(str) {
    const lacation = str || cityInner;
    fetch(
      `https://pixabay.com/api/?key=${constants.DATA.PIXABAYKEY}&q=${lacation}&image_type=photo`,
    )
      .then((response) => response.json())
      .then((com) => {
        if (com.hits.length === 0) {
          return;
        }
        constants.images.innerHTML = '';
        com.hits.forEach((el) => {
          const img = document.createElement('img');
          img.src = el.largeImageURL;
          constants.images.append(img);
        });
        document.querySelectorAll('img')[0].classList.add('showed');
      })
      .catch(() => { });
  }
  getImage();
}
