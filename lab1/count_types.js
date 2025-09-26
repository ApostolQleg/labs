const countTypes = (array) => {
  const types = {};
  for (const element of array) {
    const type = typeof element;
    types[type] = (types[type] || 0) + 1;
  }
  return types;
};

// Приклад використання
const myArray = [
  1,
  "hello",
  true,
  42,
  null,
  undefined,
  [1, 2, 3],
  function () {
    return "hi";
  },
  Symbol("sym"),
  3.14,
  false,
  "world",
  [4, 5],
  () => "arrow",
  BigInt(9007199254740991),
];

console.dir(countTypes(myArray));
