// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

// Стилизация проекта -

// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

let userDetails = JSON.parse(localStorage.getItem('key'));
let wrap = document.createElement('div');
wrap.classList.add('wrap');
for (let item of userDetails) {
    let button = document.createElement('button');
    button.classList.add('button1');
    button.innerText = 'post of current user';
    let postWrap = document.createElement('div');
    postWrap.classList.add('postWrap');
    button.onclick = function () {
        button.disabled = true;
        fetch('https://jsonplaceholder.typicode.com/users/' + item.id + '/posts')
            .then(response => response.json())
            .then(itemsAr => {
            for (let itemId of itemsAr) {
                let postDiv = document.createElement('div');
                postDiv.classList.add('postData');
                let postTitle = document.createElement('div');
                postTitle.innerHTML = `<h3>${itemId.title}</h3>`;
                let btnTitle = document.createElement('button');
                btnTitle.classList.add('postDivDetailButton');
                btnTitle.innerHTML = `<h4>Details of current post</h4>`;
                btnTitle.onclick = function () {
                    location.href = `post-details.html`;
                    let key = `postDetail`;
                    localStorage.setItem(key, JSON.stringify(itemId));
                };
                postDiv.append(postTitle, btnTitle);
                postWrap.append(postDiv);
            }
            document.body.appendChild(postWrap);
        });
    };
    for (let key in item) {
        let element = document.createElement('div');
        element.innerText = `${key} - ${item[key]}`;
        wrap.appendChild(element);
    }
    wrap.append(button);
}
document.body.appendChild(wrap);

