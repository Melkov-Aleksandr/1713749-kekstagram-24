//получаем рандомное число
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

export {getRandomNumber};

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

export {getStringLength, maxString, testString};

//рандомное не повторяющиеся число

const randomNumberId = [];

function myRandom() {
  const result = getRandomNumber(1, 100000);
  if (randomNumberId.indexOf(result) === -1) {
    randomNumberId.push(result);
    return(result);
  } else {
    const result2 = getRandomNumber(1, 100000) + 1;
    return(result2);
  }
}

export {myRandom};
