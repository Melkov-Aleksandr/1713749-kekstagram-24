//проверка чисел
function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    throw Error('Отрицательный диапозон');
  }
  if (max <= min) {
    throw Error('Ошибка значений');
  }
  const  randomNumber =  (Math.random() * (max - min + 1) + min);
  return Math.floor(randomNumber);

}

getRandomNumber(1, 10);

//Проверка максимально длины строки

const maxString = 140;
const testString = 'test comment';

function getStringLength (max, string) {
  if (string.length <= max) {
    return true;
  }

  return false;
}

getStringLength(maxString, testString);
