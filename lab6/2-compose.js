// Умова Шемседінова
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f1 = compose(inc, twice, cube); // Виводить: 251
console.log(f1(5));

const f2 = compose(inc, inc); // Виводить: 9
console.log(f2(7));

const f3 = compose(inc, 7, cube); // Виводить: помилку
console.log(f3(10));

// виконання
function compose(...functions) {
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
