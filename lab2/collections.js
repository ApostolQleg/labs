// Collections

const people = [{ name: 'Oleg', phone: '+380971495868' }
    , { name: 'Kate', phone: '+380631234567' }
    , { name: 'Max', phone: '+380501112233' }
    , { name: 'John', phone: '+380671234567' }
    , { name: 'Peter', phone: '+380631112233' }];

const findPhoneByName = (name) => {
    for (let person of people) {
        if (person.name === name) return person.phone;
    };
};

console.dir(findPhoneByName('Oleg'));