const inc_num = (num) => {
    return ++num;
};

const myNum = 5;
console.dir(inc_num(myNum));

const inc_obj = (obj) => {
    return ++obj.value;
};

const myObject = { value: myNum };
console.dir(inc_obj(myObject));
