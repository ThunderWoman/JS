// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let posts = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            let post = document.createElement('div');
            post.innerText = `post id - ${item.id}; ${item.body}`;
            post.classList.add('post');
            let btn = document.createElement('button');
            btn.innerText = 'Переглянути коментарі';
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        let comments = document.createElement('div');
                        comments.classList.add('post-comments');
                        for (const comItem of value) {
                            let comment = document.createElement('div');
                            comment.classList.add('comment');
                            comment.innerText = comItem.body;
                            comments.appendChild(comment);
                        }
                        post.appendChild(comments);
                    });
            };
            post.append(btn);
            posts.append(post);
        }
    });