// Приклад Шемседінова
const m = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(max(m)); // 9

// без flat та reduce
function max(array) {
	let max = array[0][0];
	for (let firstArg of array) {
		for (let secondArg of firstArg) {
			secondArg > max ? (max = secondArg) : max;
		}
	}
	return max;
}

// з flat та reduce
function maxReduce(array) {
	return array.flat().reduce((acc, value) => Math.max(acc, value));
}

console.log(maxReduce(m));
