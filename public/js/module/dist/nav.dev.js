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