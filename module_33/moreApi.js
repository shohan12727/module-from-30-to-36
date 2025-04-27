const handleLoadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(userData => {
            console.log(userData)
            displayUser(userData)

        })
}

const displayUser = (users) => {
    console.log(users[0]);

}