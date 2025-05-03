const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then (res => res.json())
    .then (data => console.log(data))
    .catch(err => console.log(err))

}

// loadData();
//promise core concept................
const feachData = () => {
    return new Promise((resolve,reject) => {
               const status = true;
               if (status) {
                resolve({name:shohan})
               }
               else { 
                reject("server error")
               }
    })
}
fetchData()
.then (res => console.log(res))
.catch ( err => console.log(err))