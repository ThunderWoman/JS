// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
let n4 = 'Albus__---..Dumbldor';

function normalizeName(name) {
    return name
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ');
}

document.write(normalizeName(n1) + '<br/>');
document.write(normalizeName(n2) + '<br/>');
document.write(normalizeName(n3) + '<br/>');
document.write(normalizeName(n4) + '<br/>');

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function randomArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

document.write(randomArray(50) + '<br/>');

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let numbers = randomArray(50);
numbers.sort((a, b) => a - b);
document.write(numbers + '<br/>');

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let number = (length, num) => {
    let emptyAr = [];
    for (let i = 0; i < length; i++) {
        emptyAr.push(Math.round(Math.random() * num));
    }
    return emptyAr.filter(value => !(value % 2));
};
console.log(number(10, 100));
document.write(number(10, 100) + '<br/>');

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numStr = (length, num) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray.map(value => value.toString());
};
console.log(numStr(10, 100));
document.write(numStr(10, 100) + '<br/>');

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let nums = [11, 21, 3];

let sortNums = (arr, direction) => {
    if (direction === 'ascending') return arr.sort((a, b) => a - b);
    if (direction === 'descending') return arr.sort((a, b) => b - a);
};
console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'ascending'));
document.write(sortNums(nums, 'descending') + '<br/>');
document.write(sortNums(nums, 'ascending') + '<br/>');


// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter((value) => {return value.monthDuration > 5;});
console.log(filter);
