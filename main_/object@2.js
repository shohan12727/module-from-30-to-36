// for(let key in person){
//     console.log(key)
// }


const person = {
    id:1,
    name:'shohan',
    age:20,
    uni:'nsu',
    mobile_no : 12345678
}


for(let [key,value] of Object.entries(person)){
    console.log(`key: ${key}  value: ${value}`);
}