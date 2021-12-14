// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('btn1').onclick = function () {
    let f1i1 = document.forms.f1.f1i1.value;
    let f1i2 = document.forms.f1.f1i2.value;
    let f2i1 = document.forms.f2.f2i1.value;
    let f2i2 = document.forms.f2.f2i2.value;
    console.log(f1i1);
    console.log(f1i2);
    console.log(f2i1);
    console.log(f2i2);
};

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let form = document.forms['createTable'];
form.onsubmit = function (e) {
    e.preventDefault();
    let rows = +form.rows.value;
    let columns = +form.columns.value;
    let content = form.content.value;
    console.log(rows, columns, content);

    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};


// - Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let badWords = ['яжемать', 'яжебать', 'антивакс', 'мусор', 'бидлостан']
let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    let words = document.getElementById('badWords').value;
    for (let word of badWords) {
        if (word === words) {
            alert('Вас заблоковано за вживання нецензурної лексики')
        }
    }
};
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let bad = ['яжемать', 'яжебать', 'антивакс', 'мусор', 'бидлостан']
let btn3 = document.getElementById('btn3');
btn3.onclick = function () {
    let wordBad = document.getElementById('wordBad').value;
    for (let word of bad) {
        if (wordBad.includes(word)) {
            alert('Вас заблоковано за вживання нецензурної лексики')
        }
    }
};