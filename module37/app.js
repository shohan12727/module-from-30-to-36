// variable

let name = "shohan";
name = "islam"

console.log(name);

const countryName = "bangladesh";
console.log(countryName);

const num = 50;
if (num > 70 || num < 60) {
    console.log("your logic is wright");
} else {
    console.log("you are wrong");
}

const friends = ['jdk', 'mgk', 'python', 'javaScript'];

console.log(friends);

console.log(friends[3]);
friends.push('java')
friends.pop()
friends.unshift('c#')
friends.shift()


console.log(friends.slice(1, 2));
// ======================================================
for (i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
for (let friend of friends) {
    console.log(friend);
}
// -----------------------------------------------------
function sum (a,b=0) {
    console.log(arguments);
    
    const result= a+b;
    console.log(result);
}
sum(123);

// /-----------------------------------------------------

const person = {
    name : 'ashraful islam shohan',
    age:20,
    uni:'NSU'
    // fd:friends
}
console.log(person);


// ---------------------------------------------------------


