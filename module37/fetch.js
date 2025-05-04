const person = {
    name: 'Ashraful Islam',
    Age: 21,
    uni: 'nsu',
    friends: ['pal', 'roy'],
    family: {
        fatherName: 'jakir hossain',
        motherName: 'aisha aktar'
    }
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);




const jsonData = JSON.stringify(person);
console.log(jsonData);
const planeData = JSON.parse(jsonData);
console.log(planeData);

fetch('')
.then (res => res.json())
.then (data => console.log(data));

// -----------------------------------------------------------------------------------------------------

const users = [
    { id: 1, name: "Shohan", age: 22, role: "Engineer" },
    { id: 2, name: "Aisha", age: 25, role: "Designer" },
    { id: 3, name: "Rafiq", age: 28, role: "Developer" }
  ];

  const newData = 
    {
        id:5,
        name:'Pal',
        age:21,
        role:'pornstar'
    }
  
  const newArray = [...users, newData];
  console.log(newArray);
  
  