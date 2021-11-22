// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function numb(numb1, numb2, numb3) {
    if (numb1 < numb2 && numb1 < numb3) {
        document.write(numb1);
        console.log(numb1);
    } else if (numb2 < numb3 && numb2 < numb1) {
        console.log(numb2);
        document.write(numb2);
    } else {
        console.log(numb3);
        document.write(numb3);
    }
};
numb(400, 200, 70);
