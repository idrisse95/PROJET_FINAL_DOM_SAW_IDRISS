let butt = document.getElementById('buttUn')
let butt2 = document.getElementById('buttDeux')
let butt3 = document.getElementById('buttTrois')
let butt4 = document.getElementById('buttQautre')

let carousel1 = document.querySelector('.carou1')

butt.addEventListener('click',()=>{
    carousel1.style.transform="translateX(0%)"
})

butt2.addEventListener('click',()=>{
    carousel1.style.transform="translateX(100%)"
})


butt3.addEventListener('click',()=>{
    carousel1.style.transform="translateX(200%)"
})

butt4.addEventListener('click',()=>{
    carousel1.style.transform="translateX(300%)"
})
