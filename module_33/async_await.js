// const handleuser = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         })
// }

// what i wil do here is try catch and async and await method use 

const handleuser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data)


    }
    catch {
        console.log("vul korle ei khane dhora porbe");

    }
}