import {openBigPicture} from './generate-big-pictures.js';
import {getData} from './api.js';
import {showAlert} from  './messege.js';

const field = document.querySelector('#picture').content.querySelector('.picture');
const fieldContainer = document.querySelector('.pictures');
const fieldFragment = document.createDocumentFragment();

const generatePicture = (list) => {
  list.forEach((lists) => {
    const fieldElement = field.cloneNode(true);
    fieldElement.querySelector('.picture__img').src = `${lists.url}`;
    fieldElement.querySelector('.picture__comments').textContent = `${lists.comments.length}`;
    fieldElement.querySelector('.picture__likes').textContent = `${lists.likes}`;
    fieldFragment.appendChild(fieldElement);

    fieldElement.addEventListener('click', (evt) => {
      openBigPicture(evt, lists);
    });
  });

  fieldContainer.appendChild(fieldFragment);
};

getData(
  (photos) => generatePicture(photos),
  () => showAlert('Данные не загрузились, попробуйте обновить страницу'),
);

export {generatePicture};
