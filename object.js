const person = {
    name:'shohan',
    age:20,
    country:'bangladesh'
}
Object.freeze(person);
person.age = 36;
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person);

console.log(Object.entries(person));

