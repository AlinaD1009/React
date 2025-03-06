var usersDOM = document.getElementById('users'); 
// fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
    console.log(response);
    return response.json();
})
    .then(function (users) {
    console.log(users);
    if (!usersDOM) {
        console.error("Element with id 'users' not found");
        return;
    }
    users.forEach(function (user) {
        var newUserDiv = document.createElement('div');
        newUserDiv.classList.add('userStyle');
        newUserDiv.innerHTML = "".concat(user.id, ". ").concat(user.name, " - ").concat(user.email);
        usersDOM.appendChild(newUserDiv);
    });
});
