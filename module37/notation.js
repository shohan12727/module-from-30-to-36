const person = {
    name: "Shohan",
    age: 21,
    isStudent: true,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    },
    10:"serect code"
  };
  
 
  const getName = person.name;
  console.log(getName);
  const getCode = person[10];
  
  console.log(getCode);
  


  