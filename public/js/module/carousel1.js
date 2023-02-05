let butt = document.getElementById('buttUn')
let butt2 = document.getElementById('buttDeux')
let butt3 = document.getElementById('buttTrois')
let butt4 = document.getElementById('buttQuatre')
let carousel1 = document.querySelector('.carou1')
console.log(carousel1);

butt.addEventListener('click', () => {
    carousel1.style.transform = "translateX(0%)"
    
})

butt2.addEventListener('click', () => {
    carousel1.style.transform = "translateX(-100%)"
})


butt3.addEventListener('click', () => {
    carousel1.style.transform = "translateX(-200%)"
})

butt4.addEventListener('click', () => {
    carousel1.style.transform = "translateX(-300%)"
})



export let a = 1
function tourne() {


    if (a === 1) {
            carousel1.style.transform = "translate(-100%)"
            a++;
        }
        else if (a === 2) {
            carousel1.style.transform = "translate(-200%)"
            a++;
        }
        else {
            carousel1.style.transform = "translate(0%)"
            a = 1;
        }
        
    }
       
setInterval(tourne,4000)





