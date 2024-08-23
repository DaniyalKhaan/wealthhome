'use strict';

// This website is developed by Daniyal Muhammad Khan 

const $navbar = document.querySelector("[data-navbar]");

const $navToggler = document.querySelector("[data-nav-toggler]");


$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));



// Header display when scroll

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    $header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});



// HOME FAVORITE TOGGLE FUNCTIONALITY

const $favbtntoggler = document.querySelectorAll("[data-fav-btn]");

$favbtntoggler.forEach( ($favbtntoggler) => {
    $favbtntoggler.addEventListener("click", () => {
        $favbtntoggler.classList.toggle("active");
    })

})

// This website is developed by Daniyal Muhammad Khan 
