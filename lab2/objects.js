// Objects

// function demonstrating the difference between const and let with objects
const fn = () => {
    const obj1 = { name: "" };
    let obj2 = { name: "" };

    // Changing the name property of both objects
    obj1.name = "Oleg";
    obj2.name = "Oleg";
    // both works, because we are not changing the object itself

    /* Changing the object itself
    obj1 = { age: 17 };      ---> obj1 is a constant and cannot be reassigned */
    obj2 = { age: 17 };  //  ---> obj2 is a variable and can be reassigned

};

fn();

// Function that creates and returns an object with properties name and city
const createUser = (name, city) => { return { name, city } }; // Returns an object with properties name and city, and their values are taken from the function arguments

console.dir(createUser("Oleg", "Kaniv"));