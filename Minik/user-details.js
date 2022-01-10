// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

// Стилизация проекта -

// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

let userDetails = JSON.parse(localStorage.getItem('userDetails'));
console.log(userDetails);
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

let getUser = fetch(`https://jsonplaceholder.typicode.com/users/${userDetails}`)
    .then(value => value.json())
    .then(user => {
        let userDiv = document.createElement('div');
        let userWrap = document.getElementById('wrapper');
        let block = document.createElement('block');
        let workData = document.createElement('workData');
        for (let details in user) {
            if (details === "id") {
                let userData = document.createElement('h3');
                userData.innerText = `Name: $(user.id}. ${user.name}`;
                block.appendChild(userData)
                userDiv.appendChild(block);
            } else if (details === "username") {
                let usernameData = document.createElement('h3');
                usernameData.innerText = `username: ${user.username}`;
                block.appendChild(usernameData)
                userDiv.appendChild(block);
            } else if (details === "email") {
                let userEmailData = document.createElement('h3');
                userEmailData.innerText = `email: ${user.email}`;
                block.appendChild(userEmailData);
                userDiv.appendChild(block);
            } else if (details === "address") {
                let addressData = document.createElement('div');
                for (let userAddress in addressData) {
                    if (userAddress === "street") {
                        let streetData = document.createElement('p');
                        streetData.innerText = `street: ${addressData[userAddress]}`;
                        addressData.appendChild(streetData);
                    } else if (userAddress === "suite") {
                        let suiteData = document.createElement('p');
                        suiteData.innerText = `suite: ${addressData[userAddress]}`;
                        addressData.appendChild(suiteData);
                    } else if (userAddress === "city") {
                        let cityData = document.createElement('p');
                        cityData.innerText = `city: ${addressData[userAddress]}`;
                        addressData.appendChild(cityData);
                    } else if (userAddress === "zipcode") {
                        let zipcodeData = document.createElement('p');
                        zipcodeData.innerText = `zipcode: ${addressData[userAddress]}`;
                        addressData.appendChild(zipcodeData);
                    } else if (userAddress === "geo") {
                        let addressGeo = document.createElement('div');
                        for (let geo in addressGeo) {
                            if (geo === "lat") {
                                let geoLat = document.createElement('p');
                                geoLat.innerText = `lat: ${addressGeo[lat]}`;
                                addressGeo.appendChild(geoLat);
                            } else if (geo === "lng") {
                                let geoLng = document.createElement('p');
                                geoLng.innerText = `lng: ${addressGeo[lng]}`;
                                addressGeo.appendChild(geoLng);
                            }
                            addressData.appendChild(addressGeo);
                        }
                    }
                }
                userDiv.appendChild(addressData);
            } else if (details === "phone") {
                let phone = document.createElement('h4');
                phone.innerText = `phone: ${user.phone}`;
                workData.appendChild(phone);
            } else if (details === "website") {
                let website = document.createElement('h4');
                website.innerText = `website: ${user.website}`;
                workData.appendChild(website);
            } else if (details === "company") {
                let company = document.createElement('div');
                for (let userCompany in company) {
                    if (userCompany === "name") {
                        let companyName = document.createElement('h4');
                        companyName.innerText = `company name: ${user.name}`;
                        company.appendChild(companyName);
                    } else if (userCompany === "catchPhrase") {
                        let catchPhrase = document.createElement('h4');
                        catchPhrase.innerText = `catchPhrase: ${user.catchPhrase}`;
                        company.appendChild(catchPhrase);
                    } else if (userCompany === "bs") {
                        let companyBs = document.createElement('h4');
                        companyBs.innerText = `bs: ${user.bs}`;
                        company.appendChild(companyBs);
                    }
                    workData.appendChild(company);
                }
                userDiv.appendChild(workData);
            }
        }
        let postsUser = document.createElement('button');
        postsUser.innerText = "post of current user";
        postsUser.classList.add('button');
        postsUser.addEventListener('button_title', () => getPosts(`${user.id}`));
        userDiv.appendChild(postsUser);
        userDiv.classList.add('block');
        userDiv.classList.add('wrap');
        userWrap.append(userDiv, wrapper);
    });

let getPosts = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(value => value.json())
    .then(posts => {
        for (let post of posts) {

            let postDiv = document.createElement('div');
            let buttonInfo = document.createElement('buttonInfo');
            buttonInfo.classList.add('button');
            buttonInfo.innerText = 'posts  titles';
            buttonInfo.className = "button";
            buttonInfo.onclick = () => {
                location.href = `post-details.html`;
                localStorage.setItem('postId', (post.id));
            }
            for (let postUser in post) {
                if (postUser === 'title') {
                    postDiv.innerText = `${postUser}: ${post[postUser]}`
                }
            }
            postDiv.appendChild(buttonInfo);
            postDiv.classList.add('post');
            wrapper.appendChild(postDiv);
        }
    })