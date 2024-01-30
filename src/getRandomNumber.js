const numberMin = 1;
const numberMax = 100;

// eslint-disable-next-line max-len
const getRandomNumber = (min = numberMin, max = numberMax) => Math.floor(Math.random() * (max - min) + min);

export default getRandomNumber;
