/**
 * this belonging to an object (general understanding)
 */


// const person = {
//     name :'shohan',
//     action:function (params) {
//       console.log(this.name)        
//     }
// }

// person.action();

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sleep () {
        console.log(`${this.name} sleep at 10pm`);
    }
}

const salauddin = new person ("rahat",50)
console.log(salauddin);
salauddin.sleep()


