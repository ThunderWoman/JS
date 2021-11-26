// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let helloLow = 'hello world';
let loremLow = 'lorem ipsum';
let javaLow = 'javascript is cool';
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let helloUp = 'HELLO WORLD';
let loremUp = 'LOREM IPSUM';
let javaUp = 'JAVASCRIPT IS COOL';
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str1 = ' dirty string   ';
console.log(str1.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToArray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str = 'Каждый охотник желает знать';
function stringToArray(str) {
    return str.split(' ');
}
console.log(stringToArray(str));
document.write(stringToArray(str) + '<br/>'); // ['Каждый', 'охотник', 'желает', 'знать']

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


function delete_characters(str, length) {
return str.substring(0, length);
}
document.write(delete_characters(str, 7) + '<br/>'); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let strHtml = "HTML JavaScript PHP";

function insert_dash(strHtml) {
    return strHtml.replaceAll(' ', '-').toUpperCase();
}
console.log(insert_dash(strHtml));
document.write(insert_dash(strHtml) + '<br/>'); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

function firstUp(javaLow) {
    return javaLow[0].toUpperCase() + javaLow.slice(1);
}
console.log(firstUp(javaLow));
document.write(firstUp(javaLow) + '<br/>');

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
document.write(capitalize('каждый охотник желает знать'));
console.log(capitalize('каждый охотник желает знать'));