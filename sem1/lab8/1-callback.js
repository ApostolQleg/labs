// Умова Шемседінова
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
	console.log({ key, value });
});

// виконання
function iterate(object, callback) {
	for (let key in object) {
		callback(key, object[key]);
	}
}
