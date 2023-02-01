"use strict";

var button = document.querySelector('.contain-hamburger');
var nav = document.querySelector('nav');
var span1 = document.querySelector('#hamburger div:first-child');
var span2 = document.querySelector('#hamburger div:nth-child(2)');
var span3 = document.querySelector('#hamburger div:nth-child(3)');
button.addEventListener('click', function () {
  nav.classList.toggle('nav-bug');
  span1.classList.toggle('span1');
  span2.classList.toggle('span2');
  span3.classList.toggle('span3');
});
var about = document.getElementById('About');
var aboutButt = document.querySelector('nav ul li:nth-child(2)');
about.addEventListener('scroll', function () {
  aboutButt.style.display = 'none';
}); // const links = document.querySelectorAll(".scrollspy-link");
// const sections = document.querySelectorAll(".scrollspy-section");
// const indicator = document.querySelector(".scrollspy-indicator");
// const a = document.querySelectorAll("nav a")
// links.forEach((link) => {
//     console.log(link.dataset.target);
//     link.onclick = () => {
//         sections.forEach((section) => {
//             console.log(section.id);
//             if (link.dataset.target === section.id) {
//                 document.documentElement.scrollTop = section.offsetTop;
//             }
//         });
//     };
// });
// window.onscroll = () => scrollspy();
// window.onresize = () => scrollspy();
// const scrollspy = () => {
//     const pageYPosition = document.documentElement.scrollTop || document.body.scrollTop;
//     sections.forEach((section) => {
//         const sectionYPosition = section.offsetTop;
//         if (pageYPosition > sectionYPosition - 60) {
//             links.forEach((link) => {
//                 if (link.dataset.target === section.id) {
//                     indicator.style.left = `${link.offsetLeft}px`;
//                     indicator.style.width = `${link.offsetWidth}px`;
//                     document.querySelector('.tes').style.transform = 'translateX(0)'
//                     console.log(link.dataset.target);
//                     // indicator.forEach(element => {
//                     //     if (element.dataset.target === section.id) {
//                     //         indicator.style.transform = 'translateX(0)'
//                     //     
//                 }
//             });
//         }
//     });
// };
// scrollspy();