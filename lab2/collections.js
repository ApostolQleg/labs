// Collections

// Phonebook
const phonebook = [
  { name: "Oleg", phone: "+380971495868" },
  { name: "Kate", phone: "+380631234567" },
  { name: "Max", phone: "+380501112233" },
  { name: "John", phone: "+380671234567" },
  { name: "Peter", phone: "+380631112233" },
];

// function to find phone by name in the phonebook
let findPhoneByName = (name) => {
  for (let person of phonebook) {
    if (person.name === name) return person.phone;
  }
};

console.dir(findPhoneByName("Oleg"));

// function that creates a hash map from the phonebook
const createHash = (people) => {
  const hash = {};
  for (let person of people) {
    hash[person.name] = person.phone;
  }
  return hash;
};

phonebookHash = createHash(phonebook);

// Implement findPhoneByName using the hash map
findPhoneByName = (name) => {
  return phonebookHash[name];
};

console.dir(findPhoneByName("John"));
