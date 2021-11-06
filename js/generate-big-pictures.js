import {list} from './comments.js';

const body = document.querySelector('body');
const bigPictures = document.querySelector('.big-picture');
const prewiew = document.querySelector('.big-picture__preview');

function clearComment() {
  const autoComment = document.querySelectorAll('.social__comment');
  for (let i = 0; i < autoComment.length; i++) {
    autoComment[i].classList.add('hidden');
  }
}

clearComment();

const comment = [];

function getCommentUser () {
  list.forEach((lists) => {
    const listComment2 = lists.comments;
    comment.push(listComment2);
  });
  return(comment);
}

getCommentUser();

function getUserPhoto (start, end, array) {
  for (let i = start; i < end; i++) {
    const prewiew2 = prewiew.cloneNode(true);
    prewiew.remove();
    prewiew2.querySelector('.big-picture__img img').src = array[i].url;
    prewiew2.querySelector('.likes-count').textContent = array[i].likes;
    prewiew2.querySelector('.comments-count').textContent = array[i].comments.length;
    prewiew2.querySelector('.social__caption').textContent = array[i].description;
    prewiew2.querySelector('.social__comment-count').classList.add('hidden');
    prewiew2.querySelector('.comments-loader').classList.add('hidden');
    prewiew2.classList.add('hidden');
    bigPictures.appendChild(prewiew2);
  }
}

getUserPhoto(0, 25, list);

function getPopupComment () {
  const bigPicturePrewiew = document.querySelectorAll('.big-picture__preview');
  for (let i = 0; i < bigPicturePrewiew.length; i++) {
    const commentNumber = comment[i];
    for (let j = 0; j < commentNumber.length; j++) {
      const socialComment = document.querySelector('.social__comment');
      const commentNode = socialComment.cloneNode(true);
      commentNode.querySelector('.social__picture').src = commentNumber[j].avatar;
      commentNode.querySelector('.social__picture').alt = commentNumber[j].name;
      commentNode.querySelector('.social__text').textContent = commentNumber[j].messege;
      commentNode.classList.remove('hidden');
      bigPicturePrewiew[i].querySelector('.social__comments').appendChild(commentNode);
    }
  }
}

getPopupComment();

function getClickPopup () {
  const collectionPicture = document.querySelectorAll('.picture');
  const collectionPopup = document.querySelectorAll('.big-picture__preview');
  const length = collectionPopup.length-1;
  for (let i = 0; i < length+1; i++) {
    collectionPicture[i].addEventListener('click', () => {
      bigPictures.classList.remove('hidden');
      collectionPopup[i].classList.remove('hidden');
      body.classList.add('modal-open');
    });
    const close = collectionPopup[i].querySelector('.big-picture__cancel');
    close.addEventListener('click', () => {
      bigPictures.classList.add('hidden');
      collectionPopup[i].classList.add('hidden');
      body.classList.remove('modal-open');
    });
    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        bigPictures.classList.add('hidden');
        collectionPopup[i].classList.add('hidden');
        body.classList.remove('modal-open');
      }
    });
  }
}

getClickPopup();
