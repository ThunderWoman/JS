// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизация проекта -

// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


let postId = JSON.parse(localStorage.getItem('postId'));
let divBlock = document.createElement('div');
document.body.appendChild(divBlock);
divBlock.classList.add('wrap');
let getPost =
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(value => value.json())
        .then(post => {
            let postBlock = document.createElement('div');
            postBlock.classList.add('block');
            for (const postUser in post) {
                let p = document.createElement('p');
                p.classList.add('border')
                p.innerText = `${postUser}: ${post[postUser]}`;
                postBlock.appendChild(p)
            }
            getCommentsByPost()
            divBlock.appendChild(postBlock)
        });
let getCommentsByPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(value => value.json())
        .then(comments => {
            let commentsUser = document.createElement('div');
            commentsUser.classList.add('wrap');
            for (const comment of comments) {
                let commentUser = document.createElement('div');
                commentUser.classList.add('comment-block')
                for (const commentKey in comment) {
                    let p = document.createElement('p');
                    p.innerText = `${commentKey}: ${comment[commentKey]}`;
                    commentUser.appendChild(p);
                }
                commentsUser.appendChild(commentUser);
            }
            divBlock.appendChild(commentsUser)
        })
}nt.body.append(wrap);