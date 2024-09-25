export const sum = (number1, number2) => {
  return number1 + number2;
};

export const subs = (number1, number2) => {
  return number1 - number2;
};

export const times = (number1, number2) => {
  return number1 * number2;
};

export const devide = (number1, number2) => {
  return number1 / number2;
};

export const sumAll = (numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

export const calculate = (numbers, callback) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  callback(total);
};

export const calculateAndReturn = (numbers, callback) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return callback(total);
};
