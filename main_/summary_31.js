
const student = {
    name: "Ashraful Islam Shohan",
    id: "NSU123456",
    department: "ECE",
    isEnrolled: true,
    courses: ["CSE115", "MAT120", "ENG102"],
    contact: {
      email: "shohan@example.com",
      phone: "+8801XXXXXXXXX"
    },
    greet: function() {
      console.log(`Hello, I’m ${this.name} from ${this.department} department.`);
    }
  };


  console.log(student.contact?.phone);
console.log(student.greet());
student.greet();

console.log(student.isEnrolled);
console.log(student.courses);
console.log(student.contact.email);

console.log(student.courses[0]);
console.log(student['id']);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));



//-------------------


const numbers = [1,2,3,5,9,6,9,-5,63,78];
const square = numbers.map((n) => n*n);
numbers.forEach((x) => {
    // console.log(x = x-1);
    console.log(x -=1);
    
})
console.log(square);













