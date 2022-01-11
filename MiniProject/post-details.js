// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизация проекта -

// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

let parse = JSON.parse(localStorage.getItem('postDetail'));
let wrap = document.createElement('div');
wrap.classList.add("postWrapCom");
let postDetail = document.createElement('div');
postDetail.classList.add("postDetail");
postDetail.innerHTML = `<h4>userId: ${parse.userId}; Id: ${parse.id}; Title: ${parse.title}; Body: ${parse.body}</h4>`;
let button = document.createElement('button');
button.classList.add('postBtn');
button.innerHTML = 'View comments';
button.onclick = function () {
    button.disabled = true;
    fetch('https://jsonplaceholder.typicode.com/posts/' + parse.userId + '/comments')
        .then(value => value.json())
        .then(posts => {
            let blockCom = document.createElement('div');
            blockCom.classList.add('wrapPost');
            for (let post of posts) {
                let comments = document.createElement('div');
                comments.classList.add('postDiv');
                comments.innerHTML = `<h4>PostID: ${post.postId}; ID: ${post.id}; Name: ${post.name}; Email: ${post.email}; Body: ${post.body}</h4>`;
                blockCom.append(comments);
            }
            wrap.append(blockCom);
        });
    console.log(parse);
};
wrap.append(postDetail);
wrap.append(button);
document.body.append(wrap);