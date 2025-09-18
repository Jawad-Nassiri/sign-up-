import { users } from "./data.js";

const usernameElem = document.getElementById('username')
const emailElem = document.getElementById('email')
const passwordElem = document.getElementById('password')
const rememberMeCheckbox = document.getElementById('rememberMe')
const signUpBtn = document.querySelector('.submit-btn')



const signUpHandler = (e) => {
    
    e.preventDefault();

    let username = usernameElem.value;
    let email = emailElem.value;
    let password = passwordElem.value;

    let mainUser = users.find(u => u.username === username && u.email === email && u.password === password)

    if (mainUser) {

        console.log(`${mainUser.username} logged in successfully !`);

        if (rememberMeCheckbox.checked) {
            document.cookie = `username=${mainUser.username};path=/`;
        }

    } else {
        console.log('User not found !');
    }

}


signUpBtn.addEventListener('click', signUpHandler)