import {getRandomNumber, myRandom} from './function.js';
const NUMBER_OF_PEOPLE = 25;

const list = [];

const userCommentPhrases = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

function getUserComments() {
  const userCommentArray = [];
  for (let index = 0; index < getRandomNumber(1,8); index++) {
    const comment = {
      id: myRandom(),
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      messege: userCommentPhrases[getRandomNumber(0, userCommentPhrases.length - 1)],
      name: names[getRandomNumber(0, names.length - 1)],
    };
    userCommentArray.push(comment);
  }
  return(userCommentArray);
}


for (let index = 0; index < NUMBER_OF_PEOPLE; index++) {
  const userElement = {
    id: index+1,
    url: `photos/${index+1}.jpg`,
    description: `описание ${index+1}`,
    likes: getRandomNumber(15, 200),
    comments: getUserComments(),
  };
  list.push(userElement);
}

export {list};
