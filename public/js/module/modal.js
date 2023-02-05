
let enr = document.getElementById('enr')
let modal = document.getElementById('contain-modal')
let button = document.getElementById('butt-modal')
let nom = document.querySelector('.modal ul li:nth-child(2) input')
let prenom = document.querySelector('.modal ul li:nth-child(3) input')


button.addEventListener('click', () => {
    modal.style.display = 'block'
})

enr.addEventListener('click', () => {
    location.reload()
    button.textContent = nom.value
    modal.style.display = 'none'
})

 


//MODAL OUVERTURE

let inscrire = document.getElementById('input-modal')
let trans = document.getElementById('tt')
let book = document.getElementById('book-modal')
let buttonB = document.getElementById('bookB')
 



trans.addEventListener('click',()=>{
    book.classList.toggle('translate-modal')
    inscrire.classList.toggle('op')
})

buttonB.addEventListener('click',()=>{
    modal.style.display='none'
    location.reload()
})



//DARK MODE

let darkB = document.querySelector('#dark-mode')
let txtHome = document.querySelectorAll('.blanc')
let bodyc = document.querySelectorAll('.oui')
let choix = document.querySelectorAll('#choix button')
let menu = document.querySelectorAll('.carte .items div:nth-child(2)')
let chef = document.querySelectorAll(' .noir')
let i = document.querySelector('#dark-mode i')

console.log(darkB);
console.log(bodyc);

darkB.addEventListener('click', () => {
    bodyc.forEach(element => {
        element.classList.toggle('dark');
    });
    // bodyc.classList.add('dark');
    console.log('dark');
    txtHome.forEach(element => {
        element.classList.toggle('blanche')
    });
    choix.forEach(element => {
        element.classList.toggle('blanche')
    });

    menu.forEach(element => {
        element.classList.toggle('blanche')
    });

    chef.forEach(element => {
        element.classList.toggle('noire')
    });

    if (i.classList.contains('fa-moon')) {
        i.classList.remove('fa-solid')
        i.setAttribute("class", "fa-regular fa-sun jaune ")
    }
    else{
        i.classList.remove('fa-moon')
        i.setAttribute("class", "fa-solid fa-moon ")
    }
})