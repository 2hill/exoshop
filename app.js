"use strict";

let check = document.querySelector("form")
let error = document.querySelector(".error")
let success = document.querySelector(".success")
let email = document.querySelector("#email")
let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/

check.addEventListener('submit', function(e) {
  e.preventDefault()
    !regex.test(email.value)
    ? (error.style.display = "inline")
    : (success.style.display = "inline", error.remove());
});



check.onfocus = function() {
  if (this.classList.contains('error')) {
    this.classList.remove('error');
    error.innerHTML = "";
  }
};
