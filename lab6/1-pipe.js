// Умова Шемседінова
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f1 = pipe(inc, twice, cube); // Виводить: 1728
console.log(f1(5));

const f2 = pipe(inc, inc); // Виводить: 9
console.log(f2(7));

const f3 = pipe(inc, 7, cube); // Виводить: помилку
console.log(f3(10));

// виконання
function pipe(...functions) {
	let calc = (x) => {
		try {
			for (let f of functions) {
				x = f(x);
			}
			return x;
		} catch (error) {
			return error;
		}
	};
	return calc;
}
