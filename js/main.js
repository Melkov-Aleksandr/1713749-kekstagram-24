import {getRandomNumber} from './function.js';
import {NUMBER_OF_PEOPLE, getUserComments, list} from './comments.js';
//генерация людей

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
//
