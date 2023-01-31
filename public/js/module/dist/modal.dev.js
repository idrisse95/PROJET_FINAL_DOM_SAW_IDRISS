"use strict";

var enr = document.getElementById('enr');
var fermer = document.getElementById('fermer');
var modal = document.getElementById('contain-modal');
var button = document.getElementById('butt-modal');
butt.addEventListener('click', function () {
  modal.style.display = 'block';
});
enr.addEventListener('click', function () {
  modal.style.display = 'none';
});
fermer.addEventListener('click', function () {
  modal.style.display = 'none';
});