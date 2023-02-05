let button = document.querySelector('.contain-hamburger')

let nav = document.querySelector('nav')

let span1 = document.querySelector('#hamburger div:first-child')
let span2 = document.querySelector('#hamburger div:nth-child(2)')
let span3 = document.querySelector('#hamburger div:nth-child(3)')

button.addEventListener('click', () => {
    nav.classList.toggle('nav-bug')
    span1.classList.toggle('span1')
    span2.classList.toggle('span2')
    span3.classList.toggle('span3')
})



let about = document.getElementById('About')

let aboutButt = document.querySelector('nav ul li:nth-child(2)')

about.addEventListener('scroll', () => {
    aboutButt.style.display = 'none'
})










