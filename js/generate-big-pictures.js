import {isEscapeKey, addBodyModalOpen, removeBodyModalOpen} from './function.js';

const MAX_SHOW_COMMENT = 5;
const bigPictures = document.querySelector('.big-picture');
const bigPicturesComments = bigPictures.querySelector('.social__comment');
const bigPicturesPhoto = bigPictures.querySelector('.big-picture__img img');
const like = bigPictures.querySelector('.likes-count');
const commentCount = bigPictures.querySelector('.comments-count-number');
const lengthComment = bigPictures.querySelector('.comments-count');
const commentContainer = bigPictures.querySelector('.social__comments');
const bigBicturesButton = bigPictures.querySelector('.big-picture__cancel');
const commentsLoader = bigPictures.querySelector('.comments-loader');
const bigPicturesText = bigPictures.querySelector('.social__caption');

function clearComment() {
  commentContainer.innerHTML = '';
}

clearComment();

const getCommentUser = (comment) => {
  const bigPicturesCommentsClone = bigPicturesComments.cloneNode(true);
  bigPicturesCommentsClone.classList.add('hidden');
  bigPicturesCommentsClone.querySelector('.social__picture').src = comment.avatar;
  bigPicturesCommentsClone.querySelector('.social__picture').alt = `${comment.name}`;
  bigPicturesCommentsClone.querySelector('.social__text').textContent = `${comment.message}`;
  commentContainer.appendChild(bigPicturesCommentsClone);
};

const showComment = () => {
  const hiddenComment = commentContainer.querySelectorAll('.social__comment.hidden');
  Array.from(hiddenComment).slice(0, MAX_SHOW_COMMENT).forEach((comment) => comment.classList.remove('hidden'));
  const allComment = commentContainer.querySelectorAll('.social__comment');
  const allOpenComment = commentContainer.querySelectorAll('.social__comment:not(.hidden)');
  commentCount.textContent = allOpenComment.length;

  if (allComment.length === allOpenComment.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const getBigPicture = (picture) => {
  bigPictures.classList.remove('hidden');
  addBodyModalOpen();

  bigPicturesPhoto.src = `${picture.url}`;
  bigPicturesPhoto.alt = `${picture.description}`;
  like.textContent = `${picture.likes}`;
  lengthComment.textContent = `${picture.comments.length}`;
  bigPicturesText.textContent = `${picture.description}`;


  picture.comments.forEach(getCommentUser);
  showComment();
};

const pictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (evt, picture) => {
  evt.preventDefault();
  getBigPicture(picture);

  document.addEventListener('keydown', pictureEscKeydown);
  commentsLoader.addEventListener('click', showComment);
  bigBicturesButton.addEventListener('click', closeBigPicture);
};

function closeBigPicture() {
  bigPictures.classList.add('hidden');
  removeBodyModalOpen();
  clearComment();

  document.removeEventListener('keydown', pictureEscKeydown);
  commentsLoader.removeEventListener('click', showComment);
  bigBicturesButton.removeEventListener('click', closeBigPicture);
}

export {openBigPicture, getBigPicture};
//
