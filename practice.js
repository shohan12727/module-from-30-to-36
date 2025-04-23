const student = {
    name: "Ashraful Islam Shohan",
    age: 21,
    department: "CSE",
    isEnrolled: true,
    subjects: ["Math", "Physics", "Programming"],
    
  };

for(let [key,value] of Object.entries(student)){
    console.log(`key: ${key} value: ${value}`);
}
