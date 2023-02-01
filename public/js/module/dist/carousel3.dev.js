"use strict";

var butt = document.getElementById('butt1-3');
var butt2 = document.getElementById('butt2-3');
var butt3 = document.getElementById('butt3-3');
var butt4 = document.getElementById('butt4-3');
var butt5 = document.getElementById('butt5-3');
var butt6 = document.getElementById('butt6-3');
var butt7 = document.getElementById('butt7-3');
var butt8 = document.getElementById('butt8-3');
var div1 = document.querySelector('#tout .carou3 div:nth-child(1)');
var div2 = document.querySelector('#tout .carou3 div:nth-child(2)');
var div3 = document.querySelector('#tout .carou3 div:nth-child(3)');
var div4 = document.querySelector('#tout .carou3 div:nth-child(4)');
var div5 = document.querySelector('#tout .carou3 div:nth-child(5)');
var div6 = document.querySelector('#tout .carou3 div:nth-child(6)');
var div7 = document.querySelector('#tout .carou3 div:nth-child(7)');
var div8 = document.querySelector('#tout .carou3 div:nth-child(8)');
var div9 = document.querySelector('#tout .carou3 div:nth-child(9)');
var div10 = document.querySelector('#tout .carou3 div:nth-child(10)');
var div11 = document.querySelector('#tout .carou3 div:nth-child(11)');
var div12 = document.querySelector('#tout .carou3 div:nth-child(12)');
var divTotal = document.querySelectorAll('#tout .carou3 div'); // console.log(div3);
// div3.forEach(element => {
//     console.log(document.element.clientWidth);
// });

divTotal.forEach(function (element) {
  var carousel3 = document.querySelector('#tout .carou3');
  console.log(carousel3);
  butt.addEventListener('click', function () {
    carousel3.style.transform = "translateX(-0%)";
    div3.classList.add('divVert');
  });
  butt.addEventListener('focus', function () {
    element[3].classList.add('divVert');
  });
  butt2.addEventListener('click', function () {
    carousel3.style.transform = "translateX(-20%)";
  });
  butt3.addEventListener('click', function () {
    carousel3.style.transform = "translateX(-40%)";
  });
  butt4.addEventListener('click', function () {
    carousel3.style.transform = "translateX(-60%)";
  });
  butt5.addEventListener('click', function () {
    carousel3.style.transform = "translateX(-80%)";
  });
  butt6.addEventListener('click', function () {
    carousel3.style.transform = "translateX(-100%)";
  });
  butt7.addEventListener('click', function () {
    carousel3.style.transform = "translateX(-120%)";
  });
  butt8.addEventListener('click', function () {
    carousel3.style.transform = "translateX(-140%)";
  });
});