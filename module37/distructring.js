// const element1 = friends[1];
// const element2 = friends[2];
// const element3 = friends[3];
console.log(element1,element2,element3);
const friends = ['shohan', 'rajesh', 'pal', 'simanto', 'koishik'];

const [element1, element2, element3] = friends;
console.log(element1);
console.log(element2);
console.log(element3);

const person = {
    name: 'Shohan',
    age: 20,
    university: 'nsu',
    Friends: ['pal', 'pussy pal']
}

const { name, age, Friends} = person;
console.log(Friends[1]);

