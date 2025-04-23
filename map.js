const numbers = [1,123,45,34,67,23,9,56,4,34,8];



const new_array = numbers.map(number =>{
    return number*number ;
});

console.log(new_array);




// for (index = 0; index <numbers.length; index++){
//     const element = numbers[index];
//     console.log(element);
// }
const newArray = numbers.map(number => number+1);
// console.log(newArray);