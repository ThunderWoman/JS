// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let contentId = document.getElementById('content');
console.log(contentId.innerText);

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

let changeContent = document.getElementById('content');
changeContent.innerText = 'changeText';
console.log(changeContent.innerText);

// -- замініть текст параграфа з id 'rules' на будь-який інший

let changeRules = document.getElementById('rules');
changeRules.innerText = 'ChangeRules';
console.log(changeRules.innerText);

// -- змініть кожному елементу колір фону на червоний

let children = document.body.children;
for (const child of children) {
    child.style.background = 'red';

    // -- змініть кожному елементу колір тексту на синій

    child.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let elementClass = document.getElementById('rules');
console.log(elementClass.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rules = document.getElementsByClassName('fc_rules');
for (const fcrule of fc_rules) {
    fcrule.style.color = 'red';
}