const body = document.querySelector('body');

//Проверка максимально длины строки

const getStringLength = (max, string) => {
  if (string.length <= max) {
    return true;
  }
  return false;
};

export {getStringLength};

const isEscapeKey = (evt) => evt.key === 'Escape';

const addBodyModalOpen = () => {
  body.classList.add('modal-open');
};

const removeBodyModalOpen = () => {
  body.classList.remove('modal-open');
};

export {isEscapeKey, addBodyModalOpen, removeBodyModalOpen};
