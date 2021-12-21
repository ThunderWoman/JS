// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//

let posts = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const postItem of value) {
            let post = document.createElement('div');
            post.classList.add('post');
            let postId = document.createElement('div');
            postId.innerText = `id - ${postItem.id}`;
            let postUser = document.createElement('div');
            postUser.innerText = `user Id - ${postItem.userId}`;
            let title = document.createElement('h3');
            title.innerText = postItem.title;
            let body = document.createElement('div');
            body.innerText = postItem.body;
            post.append(postId, postUser, title, body);
            posts.appendChild(post);
        }
    });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// // https://jsonplaceholder.typicode.com/comments
//
let comments = document.getElementsByClassName('comments')[0];

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {

        for (const commentItem of value) {
            let comment = document.createElement('div');
            comment.classList.add('comment');
            let commentPost = document.createElement('div');
            commentPost.innerText = 'post id - ' + commentItem.postId;
            let commentId = document.createElement('div');
            commentId.innerText = 'id - ' + commentItem.id;
            let commentName = document.createElement('div');
            commentName.innerText = commentItem.name
            let commentEmail = document.createElement('div');
            commentEmail.innerText = commentItem.email;
            let commentBody = document.createElement('p');
            commentBody.innerText = commentItem.body;
            comment.append(commentPost, commentId, commentName, commentEmail, commentBody);
            comments.appendChild(comment);

        }
    });
