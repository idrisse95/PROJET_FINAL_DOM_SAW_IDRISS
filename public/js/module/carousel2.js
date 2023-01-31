let carousel2 = document.getElementById('slider2')

let butt1 = document.getElementById('butt1-2')
let butt2 = document.getElementById('butt2-2')
let butt3 = document.getElementById('butt3-2')



butt1.addEventListener('click',()=>{
    carousel2.style.transform = 'translate(0%)'
})


butt2.addEventListener('click',()=>{
    carousel2.style.transform = 'translate(-33%)'
})


butt3.addEventListener('click',()=>{
    carousel2.style.transform = 'translate(-66%)'
})