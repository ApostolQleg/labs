// Cycles

// Function that creates an array of all the numbers from some number to another
let range = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i++) array.push(i);
  return array;
};

console.dir(range(15, 30));

// Function that creates an array of odd numbers from some number to another
let rangeOdd = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i++) if (i % 2) array.push(i);
  return array;
};

console.dir(rangeOdd(15, 30));
