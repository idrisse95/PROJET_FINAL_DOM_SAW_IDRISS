"use strict";

var enr = document.getElementById('enr');
var fermer = document.getElementById('fermer');
var modal = document.getElementById('contain-modal');
var button = document.getElementById('butt-modal');
var nom = document.querySelector('.modal ul li:nth-child(2) input');
var prenom = document.querySelector('.modal ul li:nth-child(3) input');
button.addEventListener('click', function () {
  modal.style.display = 'block';
});
enr.addEventListener('click', function () {
  button.textContent = nom.value;
  modal.style.display = 'none';
});
fermer.addEventListener('click', function () {
  modal.style.display = 'none';
});