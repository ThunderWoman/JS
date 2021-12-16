// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.

let usersKey = 'favorites';
localStorage.setItem(usersKey, JSON.stringify([]));
let container = document.getElementById('block');

users.forEach(user => {
    let userDiv = document.createElement('div');
    userDiv.className = 'user';
    let content = document.createElement('div');
    content.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`
    let btn = document.createElement('button');
    btn.innerText = 'Додати до улюблених';
    btn.onclick = () => {
        let favorites = JSON.parse(localStorage.getItem(usersKey));
        favorites.push(user);
        localStorage.setItem(usersKey, JSON.stringify(favorites));
        btn.disabled = true;
    }
    userDiv.append(content, btn);
    container.appendChild(userDiv);
})
// Створити сторінку favorites.html при переході на яку потрібно вивести в документ всіх обраних на попередньому етапі.