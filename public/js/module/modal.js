
let enr = document.getElementById('enr')
let fermer = document.getElementById('fermer')
let modal = document.getElementById('contain-modal')
let button = document.getElementById('butt-modal')

let nom = document.querySelector('.modal ul li:nth-child(2) input')
let prenom = document.querySelector('.modal ul li:nth-child(3) input')


button.addEventListener('click',()=>{
    modal.style.display = 'block'
})

enr.addEventListener('click', ()=>{
    button.textContent = nom.value
    modal.style.display = 'none'
 })

fermer.addEventListener('click', ()=>{
    modal.style.display = 'none'
})