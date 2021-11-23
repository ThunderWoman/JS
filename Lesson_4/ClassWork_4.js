// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function numberMinimum(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        document.write('Найменьше число: ' + n1 + '<br/>');
    } else if (n2 < n3 && n2 < n1) {
        document.write('Найменьше число: ' + n2 + '<br/>');
    } else if (n3 < n1 && n3 < n2) {
        document.write('Найменьше число: ' + n3 + '<br/>');
    }
}
numberMinimum(3, 7, 34);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function numberMaximum(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        document.write('Найбільше число: ' + n1 + '<br/>');
    } else if (n2 > n3 && n2 > n1) {
        document.write('Найбільше число: ' + n2 + '<br/>');
    } else if (n3 > n1 && n3 > n2) {
        document.write('Найбільше число: ' + n3 + '<br/>');
    }
}
numberMaximum(34, 65, 35);

// - створити функцію яка повертає найбільше число з масиву

let arrMax = [3400, 24, 765, 934, 297, 1000, 32, 87, 945];

function maxArray(arr) {
    let maximum = arr[0];
    for (const item of arr) {
        if (item > maximum) {
            maximum = item;
        }
    }
    return maximum;
}

document.write(`Найбільше число з масиву: ${maxArray(arrMax)}` + '<br/>');

// - створити функцію яка повертає найменьше число з масиву

let arrMin = [3400, 24, 765, 934, 297, 1000, 32, 87, 945];
function minArray(arr) {
    let minimum = arr[0];
    for (const item of arr) {
        if(item < minimum){
            minimum = item;
        }
    }
    return minimum;
}
document.write(`Найменше число з масиву: ${minArray(arrMin)}` + '<br/>');

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let summa = [1, 5, 50, 39];
function sumItems (arr){
    let i = 0;
    for (const item of arr) {
        i = item + i;
    }
    return i;
}
document.write(`Сума чисел масиву: ${sumItems(summa)}` + '<br/>');

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let medium = [1, 5, 50, 39];
function mediumFunc (arr){
    let u = 0;
    for (const item of arr) {
       u = item + u;
    }
    return u/arr.length;
}
document.write(`Середнє арифметичне чисел масиву: ${mediumFunc(medium)}` + '<br/>');








// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
debugger
function funcRElement(){
    let min = arguments[0];
    let max = arguments[0];
    for (const funRandomElement of arguments) {
        if (funRandomElement > max) max = funRandomElement;
        if (funRandomElement < min) max = funRandomElement;
    }
    console.log("max ",max);
    return min;
}
const min = funcRElement(2,3,4,5,6,7,8);
console.log("min ",min);
document.write('Найбільше число з введених: ' + funcRElement(2,3,4,5,6,7,8) + '<br/>');

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function random (ranNum) {
    let empty = [];
    for (let i = 0; i < ranNum; i++){
        empty.push(Math.floor(Math.random()*100));
    }
return empty
}

document.write(`Рандомні числа: ${random(47)}` + '<br/>');


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function random2(num,limit) {
    let empty = [];
    for (let i = 0; i < num; i++) {
        empty.push(Math.round(Math.random() * limit));
    }
    return empty;
}
document.write(`Рандомні числа: ${random2(10,100)}` + '<br/>');

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


function reverse(empty) {
    for (let i = empty.length - 1, ri = 0; i > ri; i--, ri++) {
        [empty[ri], empty[i]] = [empty[i], empty[ri]];
    }
    return empty;
}
document.write(`Зворотній напрямок: ${reverse([1, 2, 3])}` + '<br/>');