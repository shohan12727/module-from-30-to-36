// nasted object 
const person = {
    name: "Jhon",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001"
    },
    hobbies: ["reading", "coding", "cycling"],
    education: {
      highschool: {
        name: "Central High",
        year: 2010
      },
      university: {
        name: "MIT",
        degree: "Computer Science",
        graduationYear: 2014
      }
    }
  };

  console.log (person.education.highschool.name);
  console.log(person.hobbies[1]);
  console.log(person["education"]["university"]['name']);

  
  




  
  




