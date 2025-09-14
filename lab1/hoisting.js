// hoisting functions and variables

// output is undefined
console.log(myAge);

// output is 17
var myAge = 17;
console.log(myAge);

// call function before it exists
myFunction(myAge);

function myFunction(age) {
    console.log("I'm ", age, " years old");
};