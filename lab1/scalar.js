// scalar and object increment functions

// function that increment's number
const inc_num = (num) => {
  return ++num;
};

const myNum = 5;

// Example: output is myNum + 1 but myNum doesn't change
console.dir(inc_num(myNum));

// function that increment's object's value property
const inc_obj = (obj) => {
  return ++obj.value;
};

const myObject = { value: myNum };

// Examlpe: output is myNum + 1 and myNum doesn't change, but myObject.value increments
console.dir(inc_obj(myObject));
