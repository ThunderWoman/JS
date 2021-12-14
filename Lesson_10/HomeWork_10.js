//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//    - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn = document.getElementById('btn');
btn.onclick = function () {
        document.getElementById('text').style.display = 'none';
    };
let btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    this.style.display = 'none';
};

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('button').onclick = function () {
  let age =   document.getElementById('age').value;
    if (!age) {
        alert('Введіть свій вік');
    } else if (+age < 18) {
        alert('Ваш вік не є замалим');
    } else {
        alert('Успішного користування сайтом');
    }
}


//- Создайте меню, которое раскрывается/сворачивается при клике


let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
    console.log(this.children);
    for (const child of this.children) {
        child.classList.toggle('hide');
    }

};

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
  //  Вывести список комментариев в документ, каждый в своем блоке.
  //  Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
        {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
        {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
        {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
        {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'}
    ]

for (const comment of comments) {

    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    let title = document.createElement('h3');
    title.innerText = comment.title;
    let bodyComment = document.createElement('div');
    bodyComment.classList.add('body-comment')
    bodyComment.innerText = comment.body;
    let btn = document.createElement('button');
    btn.innerText = 'Сховати тіло тексту';
    btn.onclick = function () {
        bodyComment.classList.toggle('hide-body');
    };


    commentDiv.append(title, bodyComment, btn);
    document.body.appendChild(commentDiv);

}