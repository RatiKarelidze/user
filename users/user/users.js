import { API_URL } from "./constants.js";

const usersElement = document.getElementById('users');


export function getAllUsers() {
    fetch(`${API_URL}/users`)
    .then(res => res.json())
    .then((data) => render(data,users)
    );
}

function render(users) {
    let usersHtml = ''
    for(let user of users) {
        usersHtml += `
        <div class='user'>
        ${user.firstName}
        </div>`
    }
    usersElement.innerHTML = usersHtml
}