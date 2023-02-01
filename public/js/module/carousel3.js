let butt =  document.getElementById('butt1-3') 
let butt2 = document.getElementById('butt2-3')
let butt3 = document.getElementById('butt3-3')
let butt4 = document.getElementById('butt4-3')
let butt5 = document.getElementById('butt5-3')
let butt6 = document.getElementById('butt6-3')
let butt7 = document.getElementById('butt7-3')
let butt8 = document.getElementById('butt8-3')


let div1 = document.querySelector('')

// let div3 = document.querySelectorAll('#tout .carou3 div')
// console.log(div3);
// div3.forEach(element => {
//     console.log(document.element.clientWidth);
// });


 
let carousel3 = document.querySelector('#tout .carou3')
console.log(carousel3);

butt.addEventListener('click',()=>{
    carousel3.style.transform="translateX(-0%)"
    
    
})

butt2.addEventListener('click',()=>{
    carousel3.style.transform="translateX(-20%)"
})


butt3.addEventListener('click',()=>{
    carousel3.style.transform="translateX(-40%)"
})

butt4.addEventListener('click',()=>{
    carousel3.style.transform="translateX(-60%)"
})

butt5.addEventListener('click',()=>{
    carousel3.style.transform="translateX(-80%)"
    
})

butt6.addEventListener('click',()=>{
    carousel3.style.transform="translateX(-100%)"
})


butt7.addEventListener('click',()=>{
    carousel3.style.transform="translateX(-120%)"
})

butt8.addEventListener('click',()=>{
    carousel3.style.transform="translateX(-140%)"
})

