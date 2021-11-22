// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let number = [4, 5, 39, 20, 48, 58];
let string = ['Julia', 'Hello', 'Kerim', 'Emir'];
let strNumBul = ['Julia', false, 45, true, 'Hello'];
console.log(number);
console.log(string);
console.log(strNumBul);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let empty = [];
empty[0] = 'Hello';
empty[1] = 'every';
empty[2] = 'one';
empty[3] = 'let`s go';
console.log(empty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello Mentor</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} - Text control</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let j = 0;
while (j < 20) {
    document.write(`<div>Hello Mentor</div>`);
    j++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let c = 0;
while (c < 20) {
    document.write(`<div>${c} - My HomeWork</div>`);
    c++;
}

// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbersArray = [10, 24, 63, 49, 65, 67, 27, 81, 19, 98];
for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i])
}


// // - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

let stringsArray = ['Thunder', 'Woman', 'Man', 'Mentor', 'Hello', 'juice', 'fruit', 'main', 'text', 'java'];
for (let i = 0; i < stringsArray.length; i++) {
    console.log(stringsArray[i])
}

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let strNumBulArray = ['Julia', true, "Kerim", 19, 'Emir', 17, 20, 26, false, 'sun', '34'];
for (let i = 0; i < strNumBulArray.length; i++) {
    console.log(strNumBulArray[i])
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let booleanArray = ['Julia', true, "Kerim", 19, 'Emir', 17, 20, 26, false, 'sun', '34'];
for (let i = 0; i < booleanArray.length; i++) {
    if (typeof booleanArray[i] === 'boolean') {
        console.log(booleanArray[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let numberArray = ['Julia', true, "Kerim", 19, 'Emir', 17, 20, 26, false, 'sun', '34'];
for (let i = 0; i < numberArray.length; i++) {
    if (typeof numberArray[i] === 'number') {
        console.log(numberArray[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let stringArray = ['Julia', true, "Kerim", 19, 'Emir', 17, 20, 26, false, 'sun', '34'];
for (let i = 0; i < stringArray.length; i++) {
    if (typeof stringArray[i] === 'string') {
        console.log(stringArray[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let emptyArray = [];
emptyArray[0] = 'Julia';
emptyArray[1] = 'Kerim';
emptyArray[2] = 2017;
emptyArray[3] = 'Emir';
emptyArray[4] = 2019;
emptyArray[5] = 'Natalia';
emptyArray[6] = 1965;
emptyArray[7] = true;
emptyArray[8] = false;
emptyArray[9] = 1;

for (let i = 0; i < emptyArray.length; i++) {
    console.log(emptyArray[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log('поточний номер ітерації з кроком 1 : ' + i + ' ');
    document.write('поточний номер ітерації з кроком 1 : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log('поточний номер ітерації з кроком 1 : ' + i + ' ');
    document.write('поточний номер ітерації з кроком 1 : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log('поточний номер ітерації з кроком 2 : ' + i + ' ');
    document.write('поточний номер ітерації з кроком 2 : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('поточний номер ітерації з парним кроком : ' + i + ' ');
        document.write('поточний номер ітерації з парним кроком : ' + i + ' ');
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log('поточний номер ітерації з непарним кроком : ' + i + ' ');
        document.write('поточний номер ітерації з непарним кроком : ' + i + ' ');
    }
}