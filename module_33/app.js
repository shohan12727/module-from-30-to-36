const person = {
    name:"shohan",
    age:20,
    friends : ["raje3sh",'pal','gandu'],
    status : true
}

console.log(person.friends[2]);

//json data is similar like js object 

const newPerson = JSON.stringify(person)
console.log(newPerson);
// console.log(typeof(newPerson))/;
const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);


