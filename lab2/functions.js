// Functions

// Function that calculates the average of two numbers
const avarage = (...numbers) => {
  let sum = 0;
  for (let number of numbers) sum += number;
  return sum / numbers.length;
};

console.dir(avarage(3, 4, 5, 6, 7));

// Functions which calculate the square and cube of a number
const square = (number) => number ** 2;
const cube = (number) => number ** 3;

console.dir(square(5));
console.dir(cube(5));

// Function that creates an array of the averages of the square and cube of numbers from 0 to 9
const calculate = () => {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    array.push(avarage(square(i), cube(i)));
  }
  return array;
};

console.dir(calculate());
