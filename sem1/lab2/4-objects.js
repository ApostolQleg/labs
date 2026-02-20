const fn = () => {
	const obj1 = { name: "" };
	let obj2 = { name: "" };

	// зміна властивості об'єкта
	obj1.name = "Oleg";
	obj2.name = "Oleg";
	// працює, бо змінюємо властивість об'єкта, а не сам об'єкт

	/* змінюємо сам об'єкт
    obj1 = { age: 17 };      ---> obj1 константа, тож не може бути перезаписаною */
	obj2 = { age: 17 }; //  ---> obj2 звичайна змінна, тож може бути перезаписаною
};

fn();

const createUser = (name, city) => {
	return { name, city };
};

console.log(createUser("Oleg", "Kaniv"));
