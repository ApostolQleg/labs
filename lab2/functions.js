const avarage = (...numbers) => {
  let sum = 0;
  for (let number of numbers) sum += number;
  return sum / numbers.length;
};

console.dir(avarage(3, 4, 5, 6, 7));

const square = (number) => number ** 2;
const cube = (number) => number ** 3;

console.dir(square(5));
console.dir(cube(5));

// функція, що обчислює середнє арифметичне квадратів та кубів чисел від 0 до 9
const calculate = () => {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    array.push(avarage(square(i), cube(i)));
  }
  return array;
};

console.dir(calculate());
