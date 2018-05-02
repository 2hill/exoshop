"use strict";


// Declaring my variables to prepare input checking

let check = document.querySelector("form")
let error = document.querySelector(".error")
let success = document.querySelector(".success")
let email = document.querySelector("#email")
let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/


/* checking regex and show success/ error message. I usually classic conditionnal but
i wanted to try the ternary operators */

check.addEventListener('submit', function (e) {
  e.preventDefault()
    !regex.test(email.value)
    ?(error.style.display = "inline", console.log("wrong input")) 
    :(success.style.display = "inline", console.log("good input"), error.remove());
});




//  jquery function to simulate loading state
/*
$('.button').on('click', function () {
  let $this = $(this);
  $this.button('loading');
  setTimeout(function () {
    $this.button('reset');
  }, 2000);
});  */