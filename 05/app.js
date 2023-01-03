

const apiUrl = 'http://localhost:3000/users';
const form = document.querySelector('.form');

const firstName = form.querySelector('.form__field--first-name');

const lastName = form.querySelector('.form__field--last-name');

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUser()
}

function loadUsers() {
    const promise = fetchGet(apiUrl);

    promise
        //.then((data) => console.log(data))
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function fetchGet(url) {
    return fetch(url)
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }

            return Promise.reject(resp);
        });
}

function insertUsers(usersList) {
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}

function fetchData(url, data){
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    };

    return fetch(url, options)
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }

            return Promise.reject(resp);
    });
}

function addUser(){
    
    form.addEventListener('submit', e => {
        e.preventDefault();

        // const {firstName, lastName} = e.target.elements
        // console.log(firstName, lastName)

        const data = {
            firstName: firstName.value,
            lastName: lastName.value,
        }

       

        const promise = fetchData(apiUrl, data)    
        promise       
            //.then(data=>console.log(data))           
            .catch(err=>console.error(err))            
            .finally(() =>  loadUsers());

        // const promise = fetchPost(apiUrl, data);
        // promise
        //     .catch(err => console.error(err))
        //     .finally(() => loadUsers())
    });
  
}
