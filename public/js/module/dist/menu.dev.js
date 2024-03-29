"use strict";

var _variable = require("./variable.js");

var titreMenu = document.createElement('div');

_variable.menu.appendChild(titreMenu);

titreMenu.setAttribute('class', 'titreMenu');
var ourMenu = document.createElement('div');
titreMenu.appendChild(ourMenu);
ourMenu.textContent = "OUR MENU";
var check = document.createElement('div');
titreMenu.appendChild(check);
check.innerHTML = "Check Our <span>Miam Menu</span>";
var choix = document.createElement('div');
var un = document.createElement('button');
var deux = document.createElement('button');
var trois = document.createElement('button');
var quatre = document.createElement('button');

_variable.menu.appendChild(choix);

choix.setAttribute('id', 'choix');
un.textContent = "Startes";
deux.textContent = "Breakfast";
trois.textContent = "Lunch";
quatre.textContent = "Dinner";
choix.appendChild(un);
choix.appendChild(deux);
choix.appendChild(trois);
choix.appendChild(quatre);
var choixMenu = document.createElement('div');
var titre1 = document.createElement('div');
var titre2 = document.createElement('div');

_variable.menu.appendChild(choixMenu);

choixMenu.appendChild(titre1);
choixMenu.appendChild(titre2);
titre1.textContent = "MENU";
titre2.textContent = "Startes";
choixMenu.setAttribute('class', 'choixMenu'); //ITEMS 1

var carte = document.createElement('div');
var items = document.createElement('div');
var divImg = document.createElement('div');
var img = document.createElement('img');
var nom = document.createElement('div');
var text = document.createElement('div');
var prix = document.createElement('div');
carte.setAttribute('class', 'carte');
items.setAttribute('class', 'items');
img.setAttribute('src', './public/img/menu/menu-item-1.png');
nom.textContent = "Magnam Tiste";
text.textContent = "Lorem ispum dolor sit.";
prix.textContent = "$5.95";

_variable.menu.appendChild(carte);

carte.appendChild(items);
items.appendChild(divImg);
divImg.appendChild(img);
items.appendChild(nom);
items.appendChild(text);
items.appendChild(prix); //ITEMS 2

var items2 = document.createElement('div');
var divImg2 = document.createElement('div');
var img2 = document.createElement('img');
var nom2 = document.createElement('div');
var text2 = document.createElement('div');
var prix2 = document.createElement('div');
items2.setAttribute('class', 'items');
img2.setAttribute('src', './public/img/menu/menu-item-2.png');
nom2.textContent = "Magnam Tiste";
text2.textContent = "Lorem ispum dolor sit.";
prix2.textContent = "$5.95";
carte.appendChild(items2);
items2.appendChild(divImg2);
divImg2.appendChild(img2);
items2.appendChild(nom2);
items2.appendChild(text2);
items2.appendChild(prix2); //ITEMS 3

var items3 = document.createElement('div');
var divImg3 = document.createElement('div');
var img3 = document.createElement('img');
var nom3 = document.createElement('div');
var text3 = document.createElement('div');
var prix3 = document.createElement('div');
items3.setAttribute('class', 'items');
img3.setAttribute('src', './public/img/menu/menu-item-3.png');
nom3.textContent = "Magnam Tiste";
text3.textContent = "Lorem ispum dolor sit.";
prix3.textContent = "$5.95";
carte.appendChild(items3);
items3.appendChild(divImg3);
divImg3.appendChild(img3);
items3.appendChild(nom3);
items3.appendChild(text3);
items3.appendChild(prix3); //ITEMS 4

var cartel2 = document.createElement('div');
var items4 = document.createElement('div');
var divImg4 = document.createElement('div');
var img4 = document.createElement('img');
var nom4 = document.createElement('div');
var text4 = document.createElement('div');
var prix4 = document.createElement('div');
cartel2.setAttribute('class', 'carte');
items4.setAttribute('class', 'items');
img4.setAttribute('src', './public/img/menu/menu-item-4.png');
nom4.textContent = "Magnam Tiste";
text4.textContent = "Lorem ispum dolor sit.";
prix4.textContent = "$5.95";
cartel2.appendChild(items4);

_variable.menu.appendChild(cartel2);

items4.appendChild(divImg4);
divImg4.appendChild(img4);
items4.appendChild(nom4);
items4.appendChild(text4);
items4.appendChild(prix4); //ITEMS 5

var items5 = document.createElement('div');
var divImg5 = document.createElement('div');
var img5 = document.createElement('img');
var nom5 = document.createElement('div');
var text5 = document.createElement('div');
var prix5 = document.createElement('div');
cartel2.setAttribute('class', 'carte');
items5.setAttribute('class', 'items');
img5.setAttribute('src', './public/img/menu/menu-item-5.png');
nom5.textContent = "Magnam Tiste";
text5.textContent = "Lorem ispum dolor sit.";
prix5.textContent = "$5.95";
cartel2.appendChild(items5);

_variable.menu.appendChild(cartel2);

items5.appendChild(divImg5);
divImg5.appendChild(img5);
items5.appendChild(nom5);
items5.appendChild(text5);
items5.appendChild(prix5); //ITEMS 6

var items6 = document.createElement('div');
var divImg6 = document.createElement('div');
var img6 = document.createElement('img');
var nom6 = document.createElement('div');
var text6 = document.createElement('div');
var prix6 = document.createElement('div');
cartel2.setAttribute('class', 'carte');
items6.setAttribute('class', 'items');
img6.setAttribute('src', './public/img/menu/menu-item-6.png');
nom6.textContent = "Magnam Tiste";
text6.textContent = "Lorem ispum dolor sit.";
prix6.textContent = "$6.96";
cartel2.appendChild(items6);

_variable.menu.appendChild(cartel2);

items6.appendChild(divImg6);
divImg6.appendChild(img6);
items6.appendChild(nom6);
items6.appendChild(text6);
items6.appendChild(prix6); //CLICK MENU

var choixd = document.querySelectorAll('#choix button');
choixd.forEach(function (element) {
  element.addEventListener('click', function () {
    carte.style.opacity = "0";
    cartel2.style.opacity = "0";
    titre1.style.opacity = "0";
    titre2.style.opacity = "0";
    setTimeout(function () {
      cartel2.style.opacity = "1";
      carte.style.opacity = "1";
      titre1.style.opacity = "1";
      titre2.style.opacity = "1";
      titre2.textContent = element.textContent;
    }, 300);
  });
});