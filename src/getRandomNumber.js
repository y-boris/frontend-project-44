const numberMin = 1;
const numberMax = 100;

export default (min = numberMin, max = numberMax) => Math.floor(Math.random() * (max - min) + min);
