
let enr = document.getElementById('enr')
let fermer = document.getElementById('fermer')
let modal = document.getElementById('contain-modal')
let button = document.getElementById('butt-modal')

butt.addEventListener('click',()=>{
    modal.style.display = 'block'
})

enr.addEventListener('click', ()=>{
    modal.style.display = 'none'
})

fermer.addEventListener('click', ()=>{
    modal.style.display = 'none'
})