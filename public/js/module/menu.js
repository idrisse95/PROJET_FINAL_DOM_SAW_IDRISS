import {
    menu
} from "./variable.js";



let titreMenu = document.createElement('div')
menu.appendChild(titreMenu)
titreMenu.setAttribute('class', 'titreMenu')

let ourMenu = document.createElement('div')
titreMenu.appendChild(ourMenu)
ourMenu.textContent = "OUR MENU"

let check = document.createElement('div')
titreMenu.appendChild(check)
check.innerHTML = "Check Our <span>Miam Menu</span>"


let choix = document.createElement('div')
let un = document.createElement('div')
let deux = document.createElement('div')
let trois = document.createElement('div')
let quatre = document.createElement('div')

menu.appendChild(choix)

choix.setAttribute('id', 'choix')




un.textContent = "Startes"
deux.textContent = "Breakfast"
trois.textContent = "Lunch"
quatre.textContent = "Dinner"

choix.appendChild(un);
choix.appendChild(deux);
choix.appendChild(trois);
choix.appendChild(quatre);