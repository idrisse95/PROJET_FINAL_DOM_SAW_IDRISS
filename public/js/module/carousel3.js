let butt =  document.getElementById('butt1-3') 
let butt2 = document.getElementById('butt2-3')
let butt3 = document.getElementById('butt3-3')
let butt4 = document.getElementById('butt4-3')
let butt5 = document.getElementById('butt5-3')
let butt6 = document.getElementById('butt6-3')
let butt7 = document.getElementById('butt7-3')
let butt8 = document.getElementById('butt8-3')


let div1 = document.querySelector('#tout .carou3 div:nth-child(1)')
let div2 = document.querySelector('#tout .carou3 div:nth-child(2)')
let div3 = document.querySelector('#tout .carou3 div:nth-child(3)')
let div4 = document.querySelector('#tout .carou3 div:nth-child(4)')
let div5 = document.querySelector('#tout .carou3 div:nth-child(5)')
let div6 = document.querySelector('#tout .carou3 div:nth-child(6)')
let div7 = document.querySelector('#tout .carou3 div:nth-child(7)')
let div8 = document.querySelector('#tout .carou3 div:nth-child(8)')
let div9 = document.querySelector('#tout .carou3 div:nth-child(9)')
let div10 = document.querySelector('#tout .carou3 div:nth-child(10)')
let div11 = document.querySelector('#tout .carou3 div:nth-child(11)')
let div12 = document.querySelector('#tout .carou3 div:nth-child(12)')


let divTotal = document.querySelectorAll('#tout .carou3 div')
// console.log(div3);
// div3.forEach(element => {
//     console.log(document.element.clientWidth);
// });

divTotal.forEach(element => {
     

 
let carousel3 = document.querySelector('#tout .carou3')
console.log(carousel3);

butt.addEventListener('click',()=>{
    carousel3.style.transform="translateX(-0%)"
    div3.classList.add('divVert')
    
    
})
butt.addEventListener('focus',()=>{
    element[3].classList.add('divVert')
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

    
});