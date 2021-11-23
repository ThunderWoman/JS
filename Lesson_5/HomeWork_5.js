// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

let rectangleSquare = (a, b) => a * b;
console.log(rectangleSquare(4, 3));
document.write('Площа прямокутника: ' + rectangleSquare(5, 7) + '</br>');

// - створити функцію яка обчислює та повертає площу кола

let circleSquare = r => Math.PI * r ** 2;
console.log(circleSquare(5));
document.write('Площа круга: ' + circleSquare(5) + '</br>');

// - створити функцію яка обчислює та повертає площу циліндру

let cylinderSquare = (h, r) => 2 * Math.PI * r * (h + r);
console.log(cylinderSquare(5, 7));
document.write('Площа циліндра: ' + cylinderSquare(5, 7) + '</br>');

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = ['Hello', 'Okten', 35, true];

let arrayItems =(array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(array[i]);
    }
}

arrayItems(array);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let textPar = text => document.write(`<p>${text}</p>`);
textPar('Hello Mentor');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ulThree = textLi => {
    document.write(`<ul>`);
    document.write(`<li>${textLi}</li>`);
    document.write(`<li>${textLi}</li>`);
    document.write(`<li>${textLi}</li>`);
    document.write(`</ul>`);
}

ulThree('textLi');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulCycle = (text, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

ulCycle('textliCycle', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayPrimitive = ['Mentor', 35, true, 'Okten', 7, true];

let primOl = (arr) => {
    document.write(`<ol>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ol>`);
}

primOl(arrayPrimitive);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayObjects = [{id: 1, name: 'Julia', age: 35}, {id: 2, name: 'Natalia', age: 56}, {id: 3, name: 'Kerim', age: 4}, {id: 3, name: 'Emir', age: 2}];

let objectAr = (arr) => {
    for (const elementAr of arr) {
        document.write(`<div>${elementAr.id}. ${elementAr.name} : ${elementAr.age}</div>`);
    }
}

objectAr(arrayObjects);