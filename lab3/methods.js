const iface = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

const methods = (obj) => {
  const arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      arr.push([key, obj[key].length]);
    }
  }
  return arr;
};

console.table(methods(iface));
