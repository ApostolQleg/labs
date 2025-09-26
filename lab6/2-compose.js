// Умова Шемседінова
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f1 = pipe(inc, twice, cube); // Выводит: 251
console.log(f1(5));

const f2 = pipe(inc, inc); // Выводит: 9
console.log(f2(7));

const f3 = pipe(inc, 7, cube); // Выводит ошибку
console.log(f3(10));

// виконання
function pipe(...functions) {
	let calc = (x) => {
		try {
			for (let f of functions.reverse()) {
				x = f(x);
			}
			return x;
		} catch (error) {
			return undefined;
		}
	};
	return calc;
}
