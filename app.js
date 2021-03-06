"use strict";

// Declaring my variables in preparation of input checking
let check = document.querySelector("form")
let button = document.querySelector(".ladda-button")
let error = document.querySelector(".error")
let email = document.querySelector("#email")
let select = document.querySelector("#select")
let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/

/* Checking regex, showing success/error message, disabling click only after success. 
(In general I use an if statement but here I wanted to experiment the ternary operator) */
check.addEventListener('submit', function (e) {
  e.preventDefault()
  !regex.test(email.value.toLowerCase())
  ? (window.setTimeout(() => error.style.display = "inline", 2000),
    console.log(
      "wrong format:", email.value, select.options[select.selectedIndex].text)) 
  :(fakeHttp(),
    console.log(
      "valid format:", email.value, select.options[select.selectedIndex].text),
    error.remove(), 
    button.disabled = true)
    });
    
// button loader    
Ladda.bind('.ladda-button', {timeout: 2000});

// Simulating HTTP request and Updating DOM
let fakeHttp = function () {
  setTimeout(function () {
    $(".remove").replaceWith($('#thx').show().css('display', 'flex'));
    $(".motto span").text('commerce');
  }, 2000);
}