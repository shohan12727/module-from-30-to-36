const person = {
    name: "Ashraful Islam shohan",
    age:20,
    
}





// delete person.name 
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(Object.entries(person));



const {name,age}= person ;
console.log(name);
console.log(age);
const friends = ["shohan","pal","simanto",'abid','sabit'];
const [first, second, third, forth, fifth, sixth] = friends;
console.log (first);
console.log(second);


const nums = [1,2,5,6,35,98,56,354];
const newArray = [12,23,...nums];
console.log(...newArray);

const statement = `hi, i am shohan. I am from faridpur and i am 20 years old . i studied at nsu`;
console.log(statement);

