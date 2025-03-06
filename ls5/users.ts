interface User {
    id: number;
    name: string;
    email: string;
}

// fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then((users: User[]) => {
        console.log(users);

        if (!usersDOM) {
            console.error("Element with id 'users' not found");
            return;
        }

        users.forEach((user) => {
            const newUserDiv = document.createElement('div');
            newUserDiv.classList.add('userStyle');
            newUserDiv.innerHTML = `${user.id}. ${user.name} - ${user.email}`;
            usersDOM.appendChild(newUserDiv);
        });  
    });

