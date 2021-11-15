import {isEscapeKey, addBodyModalOpen, removeBodyModalOpen, getStringLength} from './function.js';
import {setDefaultScale} from './scale.js';
import {defaultFilter} from './slider.js';
import {renderErrorMessege, renderSuccesMessege} from './messege.js';
import {sendData} from './api.js';

const MAX_HASTAG_LENGTH = 5;
const MAX_COMMENT_LENGTH = 140;
const HASHTAG_NORMS = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const form = document.querySelector('#upload-select-image');
const photoUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFormOpen = document.querySelector('#upload-file');
const uploadFormClose = document.querySelector('#upload-cancel');
const inputTextHashtags = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

const validateHashTags = () => {
  const hashTags = inputTextHashtags.value.toLowerCase().split(' ');
  const isRepeat = hashTags.some((item) => hashTags.indexOf(item) !== hashTags.lastIndexOf(item));

  if (hashTags.length > MAX_HASTAG_LENGTH) {
    inputTextHashtags.setCustomValidity(`Много хештегов. Удалите ${hashTags.length - MAX_HASTAG_LENGTH}.`);
  } else if (isRepeat) {
    inputTextHashtags.setCustomValidity('Ата-та. Нельзя повторяться.');
  } else {
    hashTags.forEach((hashTagItem) => {
      if (!HASHTAG_NORMS.test(hashTagItem) && !inputTextHashtags.value !== '') {
        inputTextHashtags.setCustomValidity('Хэш-тег начинается с символа #, не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д. и привышать 20 символов');
      } else {
        inputTextHashtags.setCustomValidity('');
      }
    });
  }
  inputTextHashtags.reportValidity();
};

const validateTextarea = () => {
  const inputDescriptionText = inputComment.value;
  if (!getStringLength(MAX_COMMENT_LENGTH, inputDescriptionText) === true) {
    inputComment.setCustomValidity(`Максимум ${MAX_COMMENT_LENGTH} символов, удалите ${inputDescriptionText.length - MAX_COMMENT_LENGTH}`);
  } else {
    inputComment.setCustomValidity('');
  }
  inputComment.reportValidity();
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopupImage();
  }
};

function openPopupImage () {
  photoUploadOverlay.classList.remove('hidden');
  addBodyModalOpen();

  uploadFormClose.addEventListener('click', closePopupImage);

  setDefaultScale();
  defaultFilter();

  inputTextHashtags.addEventListener('input', validateHashTags);
  inputComment.addEventListener('input', validateTextarea);
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closePopupImage () {
  photoUploadOverlay.classList.add('hidden');
  removeBodyModalOpen();
  uploadFormOpen.value = '';
  inputTextHashtags.value = '';
  inputComment.value = '';

  uploadFormClose.removeEventListener('click', closePopupImage);

  inputTextHashtags.removeEventListener('input', validateHashTags);
  inputComment.removeEventListener('input', validateTextarea);
  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadFormOpen.addEventListener('change', () => {
  openPopupImage();
});

inputTextHashtags.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

inputComment.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

const setImage = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => renderSuccesMessege(),
      () => renderErrorMessege(),
      new FormData(evt.target),
    );

    onSuccess();
  });
};

setImage(closePopupImage);
