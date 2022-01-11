// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

let userDiv = document.createElement('div');
userDiv.classList.add('userWrap');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (let item of users) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user');
            userBlock.innerHTML = `<h3>${item.id}. ${item.name}</h3>`;
            let array = [];
            let buttonElement = document.createElement('button');
            buttonElement.innerText = 'More details';
            userBlock.append(buttonElement);
            userDiv.append(userBlock);
            buttonElement.onclick = function (ev) {
                array = [];
                location.href = `user-details.html`;
                array.push({
                    id: item.id,
                    name: item.name,
                    username: item.username,
                    email: item.email,
                    street: item.address.street,
                    suite: item.address.suite,
                    city: item.address.city,
                    zipcode: item.address.zipcode,
                    lat: item.address.geo.lat,
                    lag: item.address.geo.lag,
                    phone: item.phone,
                    website: item.website,
                    companyName: item.company.name,
                    companyCatchPhrase: item.company.catchPhrase,
                    companyBs: item.company.bs,
                });
                localStorage.setItem('key', JSON.stringify(array))
            };
        }
        document.body.append(userDiv);
    });