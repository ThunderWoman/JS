//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars(model, fabric, gradYear, maxSpeed, volume) {
    this.model = model;
    this.fabric = fabric;
    this.gradYear = gradYear;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log('їдемо зі швидкістю ${максимальна швидкість} на годину');
    };
    this.info = function () {
        for (let key in this) {
            if (typeof this[key] !== 'function')
                console.log(`${key} - ${this[key]}`);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.gradYear = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

// Перевірка

let carUser = new Cars('BMW', 'Germany', 2014, 230, 2.1);
console.log(carUser);
carUser.drive();
carUser.info();
carUser.increaseMaxSpeed(35);
carUser.changeYear(2021);
carUser.addDriver('Prokop');
console.log(carUser);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarsC {
    constructor(model, fabric, gradYear, maxSpeed, volume) {
        this.model = model;
        this.fabric = fabric;
        this.gradYear = gradYear;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive = function () {
        console.log('їдемо зі швидкістю ${максимальна швидкість} на годину');
    }
    info = function () {
        for (let key in this) {
            if (typeof this[key] !== 'function')
                console.log(`${key} - ${this[key]}`);
        }
    }
    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear = function (newValue) {
        this.gradYear = newValue;
    }
    addDriver = function (driver) {
        this.driver = driver;
    }
}

// Перевірка

let carUserC = new CarsC('BMW', 'Germany', 2014, 230, 2.1);
console.log(carUserC);
carUser.drive();
carUser.info();
carUser.increaseMaxSpeed(35);
carUser.changeYear(2021);
carUser.addDriver('Prokop');
console.log(carUserC);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popeliushka {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let popeliushkaArray = [
    new Popeliushka('Masha', 33, 38),
    new Popeliushka('Katia', 20, 40),
    new Popeliushka('Lidia', 23, 39),
    new Popeliushka('Vika', 24, 37),
    new Popeliushka('Yulia', 35, 38),
    new Popeliushka('Varia', 38, 39),
    new Popeliushka('Milia', 28, 36),
    new Popeliushka('Lena', 25, 41),
    new Popeliushka('Anna', 26, 37),
    new Popeliushka('Zina', 29, 38),
];
console.log(popeliushkaArray);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, footsizefind) {
        this.name = name;
            this.age = age;
            this.footsizefind = footsizefind;
    };
}

let princeArray = [
    new Prince('Misha', 39, 36),
];
console.log(princeArray);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let ParaAr = (popeliushkaArray, princeArray) => {
    for (let i of popeliushkaArray) {
        if (princeArray.footsizefind === i.footsize) {
            return "Ім'я попелюшки: ${item.name}";
        }
    }
};

console.log(ParaAr(popeliushkaArray, princeArray));


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let PopeliushkaFind = popeliushkaArray.find((i) => popeliushkaArray.footsize === princeArray.footsizefind);
console.log(PopeliushkaFind);