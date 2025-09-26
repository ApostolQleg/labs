// об'єкт Шемсадінова
const iface = {
    m1: (x) => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
};

// функція, що повертає масив методів об'єкта та кількість їх параметрів
const methods = (obj) => {
    const arr = [];
    for (let method in obj) {
        if (typeof obj[method] === "function") {
            arr.push([method, obj[method].length]);
        }
    }
    return arr;
};

console.table(methods(iface));
