"use strict"

const baseURL = "https://cors-anywhere.herokuapp.com/https://samid.uz/v1/user/sign-in";

$("#loginPage").addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $("#email").value.trim();
    const password = $("#password").value.trim();


    if (
        email.length === 0 ||
        password.length === 0
    ) {
        alert("Please fill the form")
    } else {
        const response = fetch(`${baseURL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        });
        const data = response.json();
        if (data.code === 1) {
            alert(data.message);
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("username", data.data.username);
            fetchrender();
            console.log(data);
        }
        else {
            alert(data.message);
        }
    }
})