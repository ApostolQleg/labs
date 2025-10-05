const inc_num = (num) => {
	return ++num;
};

const myNum = 5;
console.log(inc_num(myNum));

const inc_obj = (obj) => {
	++obj.value;
};

const myObject = { value: myNum };
inc_obj(myObject);
console.log(myObject);
