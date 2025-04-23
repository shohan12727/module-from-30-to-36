const friends = ['shohan', 'sadik', 'pal', 'asa', 'rimon'];
console.log(friends);
console.log(...friends);

const newArray = ["imran", ...friends];
console.log(...newArray);


const numbers = [1, 23, 54, 4, 645, 54, 87, 98, 34, 65, 34, 76, 54, 34, 86, 34, 3488];
console.log(Math.max(...numbers));
console.log(Math.max(...numbers));


const pal = {
    name: "Sagar pal",
    age: 20,
    Friends: ['king shohan', 'gandu rajesh', 'Nondini Devi'],
    status: 'not found'
}


const { name, age, Friends, status } = pal;
console.log(friends);
console.log(name);

const shohan = ['itelligent', 'dashing', 'scitist'];
const [first, second, third] = shohan;

console.log(first);
console.log(second);
console.log(third);



