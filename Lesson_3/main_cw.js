// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let numbArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while

let i = 0;
while (i < numbArray.length) {
    console.log(numbArray[i]);
    i++
}

//     2. перебрати його циклом for

for (let i = 0; i < numbArray.length; i++) {
    console.log(numbArray[i]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = 0;
while (i < numbArray.length) {
    if (i % 2 !== 0) {
        console.log(numbArray[i]);
    }
    i++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < numbArray.length; i++) {
    if (i % 2 !== 0) {
        console.log(numbArray[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = 0;
while (i < numbArray.length) {
    if (numbArray[i] % 2 === 0) {
        console.log(numbArray[i]);
    }
    i++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < numbArray.length; i++) {
    if (numbArray[i] % 2 === 0) {
        console.log(numbArray[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < numbArray.length; i++) {
    if (numbArray[i] % 3 === 0) {
        numbArray[i] = "okten";
        console.log(numbArray[i]);
    }
}
console.log(numbArray);

// 8. вивести масив в зворотньому порядку.

let numbArrayBack = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let u = numbArrayBack.length - 1; u >= 0; u--) {
    console.log(numbArrayBack[u]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let numbArrayNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 9.1. перебрати його циклом while

let u = numbArrayNew.length - 1;
while (u >= 0) {
    console.log(numbArrayNew[u]);
    u--
}

// 9.2. перебрати його циклом for

for (let u = numbArrayNew.length - 1; u >= 0; u--) {
    console.log(numbArrayNew[u]);
}

// 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом

u = numbArrayNew.length - 1;
while (u >= 0) {
    if (u % 2 !== 0) {
        console.log(numbArrayNew[u]);
    }
    u--
}

// 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let u = numbArrayNew.length - 1; u >= 0; u--) {
    if (u % 2 !== 0) {
        console.log(numbArrayNew[u]);
    }
}

// 9.5. перебрати циклом while та вивести  числа тільки парні  значення

u = numbArrayNew.length - 1;
while (u >= 0) {
    if (numbArrayNew[u] % 2 === 0) {
        console.log(numbArrayNew[u]);
    }
    u--
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let u = numbArrayNew.length - 1; u >= 0; u--) {
    if (numbArrayNew[u] % 2 === 0) {
        console.log(numbArrayNew[u]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let u = numbArrayNew.length - 1; u >= 0; u--) {
    if (numbArrayNew[u] % 3 === 0) {
        numbArrayNew[u] = "okten";
        console.log(numbArrayNew[u]);
    }
}
console.log(numbArrayNew);
