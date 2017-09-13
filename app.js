"use strict";

let error = document.querySelector(".error")
let succes = document.querySelector(".success")
let check = document.querySelector(".shopify")
let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/

check.addEventListener('submit', function(e) {
  (!regex.test(check))
        ?(error.style.display = "inline")
        :(success.style.display = "inline")
        e.preventDefault()
  }
);
