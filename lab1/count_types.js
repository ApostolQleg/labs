// function that counts types of elements in an array

const countTypes = (array) => {

  //crate an object to hold types and their counts
  const types = {}

  // count types
  for (const element of array) {
    // add type to object if not already present
    const type = typeof element;

    // increment count for this type
    types[type] = (types[type] || 0) + 1;
  }
  return types;
};

// Exaple: count types in a big array
const myArray = [1, 'hello', true, 42, null, undefined, [1, 2, 3], function () { return 'hi'; }, Symbol('sym'), 3.14, false, 'world', [4, 5], () => 'arrow', BigInt(9007199254740991)];

console.dir(countTypes(myArray));