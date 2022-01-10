// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

// Стилизация проекта -

// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

let userDetails = JSON.parse(localStorage.getItem('id'));
let postDetails = document.createElement('div');
postDetails.classList.add('wrap');
for (let item of userDetails) {
    let button = document.createElement('button');
    button.classList.add('button1');
    button.innerText = 'post of current user';
    let postBlock = document.createElement('div');
    postBlock.classList.add('postWrap');
    button.onclick = function () {
        button.disabled = true;
        fetch('https://jsonplaceholder.typicode.com/users/' + item.id + '/posts')
            .then(value => value.json())
            .then(items => {
                for (let item of items) {
                    let postDiv = document.createElement('div');
                    postDiv.classList.add('postData');
                    let title = document.createElement('div');
                    title.innerHTML = `<h3>${item.title}</h3>`;
                    let btn = document.createElement('button');
                    btn.classList.add('btn');
                    btn.innerHTML = `<p>Details of current post</p>`;
                    btn.onclick = function () {
                        location.href = `post-details.html`;
                        localStorage.setItem('postId', JSON.stringify(item));
                    };
                    postDiv.append(title, btn);
                    postBlock.append(postDiv);
                }
                document.body.appendChild(postBlock);
            });
    };
    for (let key in item) {
        let element = document.createElement('div');
        element.innerText = `${key} - ${item[key]}`;
        postDetails.appendChild(element);
    }
    postDetails.append(button);
}
document.body.appendChild(postDetails);

