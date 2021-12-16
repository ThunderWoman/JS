let usersKey = 'favorites';
let container = document.getElementById('container');
let users = JSON.parse(localStorage.getItem(usersKey));

users.forEach(user => {
    let userDiv = document.createElement('div');
    userDiv.className = 'user';
    let content = document.createElement('div');
    content.innerText = `Name: ${user.name}; Age: ${user.age}\nStatus: ${user.status}`;
    userDiv.appendChild(content);
    container.appendChild(userDiv);
})