// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArray = [
    new User(1, 'Prokop', 'Yasinskiy', 'p.yasinskiy@gmail.com', 380509933220),
    new User(2, 'Nikita', 'Yasinskiy', 'n.yasinskiy@gmail.com', 380509932221),
    new User(3, 'Anatoliy', 'Yasinskiy', 'a.yasinskiy@gmail.com', 380509933222),
    new User(4, 'Ivan', 'Yasinskiy', 'i.yasinskiy@gmail.com', 380509932223),
    new User(5, 'Akilina', 'Yasinskaya', 'a.yasinskaya@gmail.com', 380509933224),
    new User(6, 'Fedora', 'Yasinskaya', 'f.yasinskaya@gmail.com', 380509932225),
    new User(7, 'Anna', 'Yasinskaya', 'a.yasinka@gmail.com', 380509933226),
    new User(8, 'Natalia', 'Yasinskaya', 'n.yasinka@gmail.com', 380509932227),
    new User(9, 'Pavlo', 'Yasinskiy', 'p.yasin@gmail.com', 380509933228),
    new User(10, 'Tihon', 'Yasinskiy', 't.yasinskiy@gmail.com', 380509932229)
];
console.log(userArray);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let userFilter = userArray.filter((item) => {
    if (item.id % 2 === 0) {
        return item
    }
});
console.log(userFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let userSort = userArray.sort((a, b) => a.id - b.id);
console.log(userSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clientArray = [
    new Client(1, 'Prokop', 'Yasinskiy', 'p.yasinskiy@gmail.com', 380509933220, ['phone', 'TV', 'joy', 'lego']),
    new Client(2, 'Nikita', 'Yasinskiy', 'n.yasinskiy@gmail.com', 380509932221, ['milk', 'solt']),
    new Client(3, 'Anatoliy', 'Yasinskiy', 'a.yasinskiy@gmail.com', 380509933222, ['joy', 'lego']),
    new Client(4, 'Ivan', 'Yasinskiy', 'i.yasinskiy@gmail.com', 380509932223, ['film', 'coffee']),
    new Client(5, 'Akilina', 'Yasinskaya', 'a.yasinskaya@gmail.com', 380509933224, ['phone', 'milk']),
    new Client(6, 'Fedora', 'Yasinskaya', 'f.yasinskaya@gmail.com', 380509932225, ['solt', 'joy', 'TV']),
    new Client(7, 'Anna', 'Yasinskaya', 'a.yasinka@gmail.com', 380509933226, ['coffee', 'lego']),
    new Client(8, 'Natalia', 'Yasinskaya', 'n.yasinka@gmail.com', 380509932227, ['joy', 'lego']),
    new Client(9, 'Pavlo', 'Yasinskiy', 'p.yasin@gmail.com', 380509933228, ['TV', 'milk']),
    new Client(10, 'Tihon', 'Yasinskiy', 't.yasinskiy@gmail.com', 380509932229, ['TV', 'coffee'])
]
console.log(clientArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientSort = clientArray.sort((a, b) => a.order - b.order);
console.log(clientArray);

