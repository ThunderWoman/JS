// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизация проекта -

// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


let postId = JSON.parse(localStorage.getItem('postId'));
console.log(postId);
console.log(postId.userId);
let wrap = document.createElement('div');
wrap.classList.add("postWrapCom");
let postDetail = document.createElement('div');
postDetail.classList.add("postDetail");
postDetail.innerText = `User: ${postId.user.id}\nId: ${postId.user.id}\n Title: ${postId.title}\n Body:${postId.body}`;
let button = document.createElement('button');
button.classList.add('postBtn')
button.innerText = 'View comments'
button.onclick = function () {
    button.disabled = true;
    fetch('https://jsonplaceholder.typicode.com/posts/${postId}/comments')
        .then(value => value.json())
        .then(posts => {
        let blockCom = document.createElement('div');
        blockCom.classList.add('wrapPost')
        for (let post of posts) {
            let comment = document.createElement('div');
            comment.classList.add('postDiv')
            comment.innerText = `PostID: ${post.id}\nID: ${post.id}\nName: ${post.name}\nEmail: ${post.email}\nBody: ${post.body}`;
            blockCom.append(comment);
        }
        wrap.append(blockCom);
    });
    console.log(postId);
};
wrap.append(postDetail, button);
document.body.append(wrap);