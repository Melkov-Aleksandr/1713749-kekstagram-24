import {generatePicture} from './generate-pictures.js';
import {debounce} from './utils/debounce.js';
import {getData} from './api.js';
import {showAlert} from  './eror-messege.js';

const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');
const containetButton = document.querySelector('.img-filters');

const filterComment = (first, second) => {
  if (first.comments.length < second.comments.length) {
    return 1;
  } else {
    return -1;
  }
};

const filterId = (first, second) => {
  if (first.id > second.id) {
    return 1;
  } else {
    return -1;
  }
};

const filterRandom = () => Math.random() -0.5;

const clearPicture = () => {
  document.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });
};

const removeButtonActive = () => {
  filterDefaultButton.classList.remove('img-filters__button--active');
  filterDiscussedButton.classList.remove('img-filters__button--active');
  filterRandomButton.classList.remove('img-filters__button--active');
};

const clickFilterButton = (photo) => {
  containetButton.classList.remove('img-filters--inactive');
  const debounceProcess = debounce(() => generatePicture(photo));
  const debounceProcessRandom = debounce(() => generatePicture(photo.slice(0,10)));

  filterDiscussedButton.addEventListener('click', () => {
    removeButtonActive();
    filterDiscussedButton.classList.add('img-filters__button--active');
    clearPicture();
    photo.sort(filterComment);
    debounceProcess();
  });

  filterRandomButton.addEventListener('click', () => {
    removeButtonActive();
    filterRandomButton.classList.add('img-filters__button--active');
    clearPicture();
    photo.sort(filterRandom);
    debounceProcessRandom();
  });

  filterDefaultButton.addEventListener('click', () => {
    removeButtonActive();
    filterDefaultButton.classList.add('img-filters__button--active');
    clearPicture();
    photo.sort(filterId);
    debounceProcess();
  });
};

getData(
  (photos) => clickFilterButton(photos),
  () => showAlert('Данные не загрузились, попробуйте обновить страницу'),
);
