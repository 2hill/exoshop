"use strict";

let check = document.querySelector("form")
let error = document.querySelector(".error")
let success = document.querySelector(".success")
let email = document.querySelector("#email")
let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/


check.addEventListener('submit', function(e) {
  console.log(email.value)
  e.preventDefault()
  if (!regex.test(email.value)){
    console.log("error")
    error.style.display = "inline"}
  else {
    console.log("success")
    success.style.display = "inline" && error.remove()
     }
});


/*check.addEventListener('submit', function(e) {
  (!regex.test(email))
    ? (error.style.display = "inline")
    : (success.style.display = "inline")
    e.preventDefault()
});*/
