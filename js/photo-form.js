const FILE_TYPES = ['jpg', 'png', 'webp', 'jpeg'];

const fileUser = document.querySelector('#upload-file');
const photo = document.querySelector('.img-upload__preview img');

fileUser.addEventListener('change', () => {
  const file = fileUser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    photo.src = URL.createObjectURL(file);
  }
});
