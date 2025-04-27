// function sum (a,b,c) {
//    const newArg = [...arguments]
//    console.log(newArg)

// }

// sum (10,20,30,12.8,545,24,5)


// function sum (a,b,c,d) {
//     console.log(arguments)
// }

// console.log(sum.length);

/**
 * we can call any function in two ways . 
 * 1. pass by value
 * 2. pass by refernce
 */
// let name = "masud";

// function test (text){
//     console.log(text)

// }

// test(name)


// let a = 10 ;
// let b = 50 ;


// function sum (num1,num2){
//     console.log(num1,num2)
// }
// sum(a,b)

const person = {
    person: "Ashraful Islam Shohan",
    age: 20,
    details : {
        uni: "nsu"
    }
}
function male (obj){
    obj.person = "tamim"
}
male(person) 

console.log(person);


