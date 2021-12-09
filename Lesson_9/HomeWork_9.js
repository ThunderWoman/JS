// Все робити за допомоги js.
// - створити блок,

let block = document.createElement('block');

//     - додати йому класи wrap, collapse, alpha, beta

block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

block.style.backgroundColor = 'pink';
block.style.color = 'grey';
block.style.fontSize = '45px';
block.innerText = 'Okten';

// - додати цей блок в body.

document.body.appendChild(block);

// - клонувати його повністю, та додати клон в body.

let block2 = block.cloneNode(true);
document.body.appendChild(block2);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main','Products','About us','Contacts'];
let menuClass = document.getElementsByClassName('menu')[0];
array.forEach(item=>{
    let menuLi = document.createElement('li');
    menuLi.innerText = item;
    menuClass.appendChild(menuLi);
});


// - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let course of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${course.title}: ${course.monthDuration}`;
    document.body.appendChild(div);
}

// - Є масив

let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

coursesAndDurationArray2.forEach(value => {
    let divClass = document.createElement('div');
    divClass.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');
    h1.innerText = value.title;
    p.innerText = value.monthDuration;
    divClass.appendChild(h1);
    divClass.appendChild(p);
    document.body.appendChild(divClass);
});