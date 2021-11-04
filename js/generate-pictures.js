import {list} from './comments.js';

const field = document.querySelector('#picture').content.querySelector('.picture');
const fieldContainer = document.querySelector('.pictures');
const fieldFragment = document.createDocumentFragment();

list.forEach((lists) => {
  const fieldElement = field.cloneNode(true);
  fieldElement.querySelector('.picture__img').src = `${lists.url}`;
  fieldElement.querySelector('.picture__comments').textContent = `${lists.comments.length}`;
  fieldElement.querySelector('.picture__likes').textContent = `${lists.likes}`;
  fieldFragment.appendChild(fieldElement);
});

fieldContainer.appendChild(fieldFragment);
