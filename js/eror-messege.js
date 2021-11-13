import {isEscapeKey} from './function.js';

const TIME_MESSEGE = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '100%';
  alertContainer.style.top = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.appendChild(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, TIME_MESSEGE);
};

const onEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};
const onDocument = (evt) => {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    closeMessage();
  }
};

function closeMessage () {
  const messageModal1 = document.querySelector('.success');
  const messageModal2 = document.querySelector('.error');
  if (messageModal1) {
    messageModal1.remove();
  } else {
    messageModal2.remove();
  }

  document.removeEventListener('click', onDocument);
  document.removeEventListener('keydown', onEscKeyDown);
}

const successTemplate = document.querySelector('#success').content.querySelector('.success');

const renderSuccesMessege = () => {
  const messageModal = successTemplate.cloneNode(true);
  document.body.appendChild(messageModal);
  const messageModalButton = messageModal.querySelector('button');

  messageModalButton.addEventListener('click', () => {
    closeMessage();
  });

  document.removeEventListener('click', onDocument);
  document.removeEventListener('keydown', onDocument);
};

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const renderErrorMessege = () => {
  const messageModal = errorTemplate.cloneNode(true);
  document.body.appendChild(messageModal);
  const messageModalButton = messageModal.querySelector('button');

  messageModalButton.addEventListener('click', () => {
    closeMessage();
  });

  document.addEventListener('click', onDocument);
  document.addEventListener('keydown', onDocument);
};
export {showAlert, renderErrorMessege, renderSuccesMessege};
//
