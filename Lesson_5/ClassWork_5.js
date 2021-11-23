// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let numberMinimum = (a, b, c) => {
    if (a < b && a < c) {
        document.write('Найменше число: ' + a + '<br/>');
    } else if (b < c && b < a) {
        document.write('Найменше число: ' + b + '<br/>');
    } else if (c < a && c < b) {
        document.write('Найменше число: ' + c + '<br/>');
    }
}
    numberMinimum(5, 3, 9);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let numberMaximum = (a, b, c) => {
    if (a > b && a > c) {
        document.write('Найменше число: ' + a + '<br/>');
    } else if (b > c && b > a) {
        document.write('Найменше число: ' + b + '<br/>');
    } else if (c > a && c > b) {
        document.write('Найменше число: ' + c + '<br/>');
    }
}
numberMaximum(5, 3, 9);

// - створити функцію яка повертає найбільше число з масиву

let arrMax = [24, 28, 765, 934, 297, 1850, -32, 87, 945];

let maxArray = (arr) => {
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

let arrMin = [24, 28, 765, 934, 297, 1850, -32, 87, 945];

let minArray = (arr) => {
    let minimum = arr[0];
    for (const item of arr) {
        if (item < minimum) {
            minimum = item;
        }
    }
    return minimum;
}

document.write(`Найменше число з масиву: ${minArray(arrMin)}` + '<br/>');

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let summa = [1, 5, 50, 39];

let sumItems = (arr) => {
    let i = 0;
    for (const item of arr) {
        i = item + i;
    }
    return i;
}
document.write('Сума чисел масиву:' + sumItems(summa) + '<br/>');

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let medium = [1, 5, 50, 39];

let mediumFunc = (arr) => {
    let u = 0;
    for (const item of arr) {
        u = item + u;
    }
    return u / arr.length;
}

document.write(`Середнє арифметичне чисел масиву: ${mediumFunc(medium)}` + '<br/>');

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMaxArr = [7, 45, 37, -25, 56, 29, 3];

let maxMin = (nums) => {
    let max = nums[0];
    let min = nums[0];
    for (const num of nums) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    console.log(max);
    return min;
}

maxMin(minMaxArr);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let random = (ranNum) => {
    let empty = [];
    for (let i = 0; i < ranNum; i++) {
        empty.push(Math.floor(Math.random() * 100));
    }
    return empty;
}

document.write(`Рандомні числа: ${random(65)}` + '<br/>');

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let random2 = (num, limit) => {
    let empty = [];
    for (let i = 0; i < num; i++) {
        empty.push(Math.round(Math.random() * limit));
    }
    return empty;
}

document.write(`Рандомні числа: ${random2(10, 100)}` + '<br/>');

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverse = (empty) => {
    for (let i = empty.length - 1, ri = 0; i > ri; i--, ri++) {
        [empty[ri], empty[i]] = [empty[i], empty[ri]];
    }
    return empty;
}

document.write(`Зворотній напрямок: ${reverse([1, 2, 3])}` + '<br/>');

