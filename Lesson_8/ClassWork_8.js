// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)

let mainHead = document.getElementById('main_header');
mainHead.classList.add('sep-2021');

// b) робить ширину елементу ul 400px

let elementsByTagName = document.getElementsByTagName('ul');
for (const element of elementsByTagName) {
    element.style.width = '400px';
}

// c) робить ширину всіх елементів з класом linkList шириною 50%

let elementsByClassName = document.getElementsByClassName('linkList');
for (const elements of elementsByClassName) {
    elements.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

function addEl(text) {
    let elementsByClassName1 = document.getElementsByClassName('listElement2');
    elementsByClassName1.innerText = text;
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liElColor = document.getElementsByTagName('li');
for (const element of liElColor) {
    element.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let elementAnchor = document.getElementsByTagName('a');
for (const a of elementAnchor) {
    a.classList.add('anchor');
}


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let elementLink3 = document.getElementsByTagName('a');
for (const element of elementLink3) {
    if (element.innerText === 'link3') {
        element.style.fontSize ='40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aElement = document.getElementsByClassName('a');
for (const a of aElement) {
    // a.classList.add(a.innerText);
    a.classList.toggle(`element_${a.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
    for (const element of subHeader) {
        element.style.background = prompt('Whats color?');
    }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()

let subHeaderColor = document.getElementsByClassName('sub-header');
for (const s of subHeaderColor) {
    if (s.innerText === 'content 2 segment')
        s.style.backgroundColor = prompt('Whats color?');
}

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()

let contentClass = document.getElementsByClassName('content_1');
for (const c of contentClass) {
    c.innerText = prompt('Get text');
}

// l) отримати елементи p та змінити їм padding на 20px

let elementP = document.getElementsByTagName('p');
for (const p of elementP) {
    p.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Приклад sep-2021)

let elementText = document.getElementsByClassName('text2');
for (const t of elementText) {
    t.innerText = 'sep-2021';
}