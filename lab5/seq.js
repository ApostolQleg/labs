const seq = (...args) => {
	const functions = [];

	if (args.length > 0 && typeof args[0] === "function") {
		functions.push(args.shift());
	} else if (args.length > 0 && typeof args[0] === "number") {
		return args[0];
	}

	// закидує всі функції в масив
	const packFunctions = (f) => {
		if (typeof f === "function") {
			functions.push(f);
			return packFunctions;
		} else {
			return releaseFunctions(functions.reverse(), f);
		}
	};
	return packFunctions;
};

// виконує всі функції з масиву
const releaseFunctions = (functions, num) => {
	for (let func of functions) {
		num = func(num);
	}
	return num;
};

// перевірки Шемсадінова
console.log(seq((x) => x + 7)((x) => x * 2)(5));
console.log(seq((x) => x * 2)((x) => x + 7)(5));
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));

// інші перевірки
console.log(seq(5));
console.log(seq((x) => x * 2)(5));
