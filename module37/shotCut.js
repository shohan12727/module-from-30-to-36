const test = 0;

if (test) {
    console.log("it's a truthy value");

} else {
    console.log("it's a falsy value");

}

// -----------------------------------------------------------------------------------------

test ? console.log("it's a truthy value") :
    console.log("it's a falsy value");

// ---------------------------------------------------------------------------------



const isActive = true;

const showUser = () => console.log("show the green flag");

const hideUser = () => console.log("hind the user");

isActive ? showUser() : hideUser();

isActive && showUser();
isActive || hideUser();


// --------------------------------------------------------------------------------------------------------

let num = "10";

const Result = +num ;
console.log(typeof Result );

