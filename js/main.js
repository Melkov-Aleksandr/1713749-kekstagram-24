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

//генерация людей

const userCommentPhrase = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const list = [];

const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

class comment {
  constructor(id, avatar, messege, name) {
    this.id = id;
    this.avatar = avatar;
    this.messege = messege;
    this.name = name;
  }
}

class element {
  constructor(id, url, description, likes, comments) {
    this.id = id;
    this.url =url;
    this.description = description;
    this.likes = likes;
    this.comments = comments;
  }
}

//получаем рандомное чилосо не повторяющиеся

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

//получаем рандомный комментарий

function getUserComments() {
  const userCommentArray = [];
  for (let jam = 0; jam < getRandomNumber(1,8); jam++) {
    const usercomment = new comment(myRandom(), `img/avatar${getRandomNumber(1, 6)}.svg`, userCommentPhrase[getRandomNumber(0, userCommentPhrase.length - 1)], names[getRandomNumber(0, names.length - 1)]);
    userCommentArray.push(usercomment);
  }
  return(userCommentArray);
}

const number25 = 25;

//собераем массив вместе

for (let iam = 0; iam < number25; iam++) {
  const userElement = new element(iam+1, `photos/${iam+1}.jpg`, `описание ${iam+1}`, getRandomNumber(15, 200), getUserComments());
  list.push(userElement);
}

// console.log(list)
//
