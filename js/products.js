import { users } from "./data.js";

const userInfoElem = document.querySelector('.user-info');




let cookies = document.cookie.split(';');
let usernameCookie = cookies.find(u => u.trim().startsWith('username='));
let username = usernameCookie.split('=')[1] || null;

let mainUser = users.find(user => user.username === username);

if(mainUser) userInfoElem.textContent = `Username is ${mainUser.username}, user email is ${mainUser.email}`