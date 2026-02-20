// виконання
const contract =
	(fn, ...types) =>
	(...args) => {
		for (let i = 0; i < args.length; i++) {
			const name = types[i].name.toLowerCase();
			if (typeof args[i] !== name)
				throw new TypeError(`Error: ${name} is an inappropriate type of arguments`);
		}

		const data = fn(...args);
		const name = types[types.length - 1].name.toLowerCase();

		if (typeof data !== name) {
			throw new TypeError(`Error: ${name} is an inappropriate type of result`);
		}
		return data;
	};

// Умова Шемседінова
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res = concatStrings("Hello ", "world!");
console.dir(res); // Output: Hello world!
