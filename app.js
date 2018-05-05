"use strict";

// Declaring my variables in preparation of input checking

let check = document.querySelector("form")
let button = document.querySelector(".button")
let error = document.querySelector(".error")
let success = document.querySelector(".success")
let email = document.querySelector("#email")
let select = document.querySelector("#select")
let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/

/* Check regex, show success/error message, disable click only after success. 
(In general I use an if statement but here I wanted to experiment the ternary operator) */
check.addEventListener('submit', function (e) {
  e.preventDefault()
  !regex.test(email.value)
  ?(error.style.display = "inline",
    console.log(
      "wrong format:", 
      email.value, 
      select.options[select.selectedIndex].text)) 
  :(fakeHttp(),
    console.log(
      "valid format:",
        email.value,
        select.options[select.selectedIndex].text),
        error.remove(), 
        button.disabled = true)
});

// Simulating HTTP request using Ladda built-in loading indicators
Ladda.bind('button[type=submit]');

function fakeHttp() {
  setTimeout(function () {
  $(".remove").replaceWith($('#thx').show().css('display', 'flex'))
  }, 2000);
}