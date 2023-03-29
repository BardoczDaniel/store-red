'use strict'

const menu = document.querySelector(".nav-list");
const btn = document.querySelector(".menu-icon");



btn.addEventListener('click', function () {

    menu.classList.toggle('reveal');

})

