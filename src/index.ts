interface Person {
    name: string;
    age: number;
}

// const friends: {name: string, age: number}[];
const friends: Person[] = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25}
];

for (let index = 0; index < friends.length; index++) {
    console.log(friends[index].name);
}

function comparePerson(a: Person, b: Person) {

}

friends.push({name: 'Deyve', age: 41});

console.log(friends);

friends.splice(2, 0, {name: 'Angela', age: 36});

console.log(friends);

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

console.table(averageTemp);

