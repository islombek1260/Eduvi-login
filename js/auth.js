"use strict"
const base = "https://cors-anywhere.herokuapp.com/https://task.samid.uz/v1/user/sing-up";

$("#reg").addEventListener('submit', (e) => {
    e.preventDefault();
    const username = $("#username").value.trim();
    const email = $("#email").value.trim();
    const password = $("#password").value.trim();
    if (username.length === 0 ||
        email.length === 0 ||
        password.length === 0
    ) {
        alert("Please fill the form")
    } else {
        const response =  fetch(`${base}/sign-up`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });
        const data = response.json();
        if (data.code === 1) {
            alert(data.message);
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("username", data.data.username);
            localStorage.setItem("email", data.data.email);
            location.replace("./login.html")
            console.log(data);
        }
    }
})

