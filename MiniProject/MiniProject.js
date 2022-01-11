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
        for (let user of users) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user');
            userBlock.innerHTML = `<h3>${user.id}. ${user.name}</h3>`;
            let array = [];
            let buttonElement = document.createElement('button');
            buttonElement.innerText = 'More details';
            userBlock.append(buttonElement);
            userDiv.append(userBlock);
            buttonElement.onclick = function (ev) {
                array = [];
                location.href = `user-details.html`;
                array.push({
                    Id: userItem.id,
                    Name: userItem.name,
                    Username: userItem.username,
                    Email: userItem.email,
                    Street: userItem.address.street,
                    Suite: userItem.address.suite,
                    City: userItem.address.city,
                    Zipcode: userItem.address.zipcode,
                    Lat: userItem.address.geo.lat,
                    Lag: userItem.address.geo.lag,
                    Phone: userItem.phone,
                    WebSite: userItem.website,
                    CompanyName: userItem.company.name,
                    CompanyCatchPhrase: userItem.company.catchPhrase,
                    CompanyBs: userItem.company.bs,
                });
                localStorage.setItem('key', JSON.stringify(array))
            };
        }
        document.body.append(userDiv);
    });