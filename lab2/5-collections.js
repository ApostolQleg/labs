const phonebook = [
	{ name: "Oleg", phone: "+380971495868" },
	{ name: "Kate", phone: "+380631234567" },
	{ name: "Max", phone: "+380501112233" },
	{ name: "John", phone: "+380671234567" },
	{ name: "Peter", phone: "+380631112233" },
];

let findPhoneByName = (name) => {
	for (let person of phonebook) {
		if (person.name === name) return person.phone;
	}
};

console.log(findPhoneByName("Oleg"));

const createHash = (people) => {
	const hash = {};
	for (let person of people) {
		hash[person.name] = person.phone;
	}
	return hash;
};

phonebookHash = createHash(phonebook);

findPhoneByName = (name) => {
	return phonebookHash[name];
};

console.log(findPhoneByName("John"));
