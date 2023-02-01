import * as CLASS from "./module/carousel1.js";
import * as CLASS2 from "./module/carousel2.js";
import * as FUNCTION from "./module/function.js";
import * as VAR from "./module/variable.js"
import * as MENU from "./module/menu.js"
import * as MODAL from "./module/modal.js"
import * as CAROUSEL from "./module/carousel3.js"
import * as NAV from "./module/nav.js"

































//SCROLL

// function reveal() {
//     var reveals = document.querySelectorAll(".reveal")

    
// for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;
// }

// if (elementTop < windowHeight - elementVisible) {
//     reveals[i].classList.add("active");
// } else {
//     reveals[i].classList.remove("active");
// }


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load



reveal();