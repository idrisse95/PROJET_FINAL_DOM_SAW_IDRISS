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
let un = document.createElement('button')
let deux = document.createElement('button')
let trois = document.createElement('button')
let quatre = document.createElement('button')

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



let choixMenu = document.createElement('div')

let titre1 = document.createElement('div')
let titre2 = document.createElement('div')

menu.appendChild(choixMenu)
choixMenu.appendChild(titre1)
choixMenu.appendChild(titre2)

titre1.textContent="MENU"
titre2.textContent="Startes"

choixMenu.setAttribute('class','choixMenu')




//ITEMS 1


let carte = document.createElement('div')
let items = document.createElement('div')

let divImg = document.createElement('div')
let img = document.createElement('img')
let nom = document.createElement('div')
let text = document.createElement('div')
let prix = document.createElement('div')



carte.setAttribute('class','carte')
items.setAttribute('class','items')
img.setAttribute('src','./public/img/menu/menu-item-1.png')
nom.textContent="Magnam Tiste"
text.textContent="Lorem ispum dolor sit."
prix.textContent="$5.95"



menu.appendChild(carte)
carte.appendChild(items)

items.appendChild(divImg)
divImg.appendChild(img)
items.appendChild(nom)
items.appendChild(text)
items.appendChild(prix)


//ITEMS 2

 
let items2 = document.createElement('div')

let divImg2 = document.createElement('div')
let img2 = document.createElement('img')
let nom2 = document.createElement('div')
let text2 = document.createElement('div')
let prix2 = document.createElement('div')



 
items2.setAttribute('class','items')
img2.setAttribute('src','./public/img/menu/menu-item-2.png')
nom2.textContent="Magnam Tiste"
text2.textContent="Lorem ispum dolor sit."
prix2.textContent="$5.95"



 
carte.appendChild(items2)

items2.appendChild(divImg2)
divImg2.appendChild(img2)
items2.appendChild(nom2)
items2.appendChild(text2)
items2.appendChild(prix2)




//ITEMS 3

 
let items3 = document.createElement('div')

let divImg3 = document.createElement('div')
let img3 = document.createElement('img')
let nom3 = document.createElement('div')
let text3 = document.createElement('div')
let prix3 = document.createElement('div')



 
items3.setAttribute('class','items')
img3.setAttribute('src','./public/img/menu/menu-item-3.png')
nom3.textContent="Magnam Tiste"
text3.textContent="Lorem ispum dolor sit."
prix3.textContent="$5.95"



 
carte.appendChild(items3)

items3.appendChild(divImg3)
divImg3.appendChild(img3)
items3.appendChild(nom3)
items3.appendChild(text3)
items3.appendChild(prix3)





//ITEMS 4

let cartel2 = document.createElement('div')
let items4 = document.createElement('div')

let divImg4 = document.createElement('div')
let img4 = document.createElement('img')
let nom4 = document.createElement('div')
let text4 = document.createElement('div')
let prix4 = document.createElement('div')



cartel2.setAttribute('class','carte')
items4.setAttribute('class','items')
img4.setAttribute('src','./public/img/menu/menu-item-4.png')
nom4.textContent="Magnam Tiste"
text4.textContent="Lorem ispum dolor sit."
prix4.textContent="$5.95"



 
cartel2.appendChild(items4)
menu.appendChild(cartel2)

items4.appendChild(divImg4)
divImg4.appendChild(img4)
items4.appendChild(nom4)
items4.appendChild(text4)
items4.appendChild(prix4)






//ITEMS 5

let items5 = document.createElement('div')

let divImg5 = document.createElement('div')
let img5 = document.createElement('img')
let nom5 = document.createElement('div')
let text5 = document.createElement('div')
let prix5 = document.createElement('div')



cartel2.setAttribute('class','carte')
items5.setAttribute('class','items')
img5.setAttribute('src','./public/img/menu/menu-item-5.png')
nom5.textContent="Magnam Tiste"
text5.textContent="Lorem ispum dolor sit."
prix5.textContent="$5.95"



 
cartel2.appendChild(items5)
menu.appendChild(cartel2)

items5.appendChild(divImg5)
divImg5.appendChild(img5)
items5.appendChild(nom5)
items5.appendChild(text5)
items5.appendChild(prix5)





//ITEMS 6

let items6 = document.createElement('div')

let divImg6 = document.createElement('div')
let img6 = document.createElement('img')
let nom6 = document.createElement('div')
let text6 = document.createElement('div')
let prix6 = document.createElement('div')



cartel2.setAttribute('class','carte')
items6.setAttribute('class','items')
img6.setAttribute('src','./public/img/menu/menu-item-6.png')
nom6.textContent="Magnam Tiste"
text6.textContent="Lorem ispum dolor sit."
prix6.textContent="$6.96"



 
cartel2.appendChild(items6)
menu.appendChild(cartel2)

items6.appendChild(divImg6)
divImg6.appendChild(img6)
items6.appendChild(nom6)
items6.appendChild(text6)
items6.appendChild(prix6)



//CLICK MENU

let choixd = document.querySelectorAll('#choix button')

choixd.forEach(element => {
    element.addEventListener('click',()=>{
        
        carte.style.opacity="0"
        cartel2.style.opacity="0"
        titre1.style.opacity="0"
        titre2.style.opacity="0"
        setTimeout(() => {
            cartel2.style.opacity="1"
            carte.style.opacity="1"
            titre1.style.opacity="1"
            titre2.style.opacity="1"
            titre2.textContent=element.textContent
        }, 300);
         
    })
    
});