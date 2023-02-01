let butt = document.getElementById('butt1-3')
let butt2 = document.getElementById('butt2-3')
let butt3 = document.getElementById('butt3-3')
let butt4 = document.getElementById('butt4-3')
let butt5 = document.getElementById('butt5-3')
let butt6 = document.getElementById('butt6-3')
let butt7 = document.getElementById('butt7-3')
let butt8 = document.getElementById('butt8-3')


let divTotal = document.querySelectorAll('#tout .carou3 div')
// console.log(div3);
// div3.forEach(element => {
//     console.log(document.element.clientWidth);
// });

divTotal.forEach(element => {



    let carousel3 = document.querySelector('#tout .carou3')
    console.log(carousel3);

    butt.addEventListener('click', () => {
        carousel3.style.transform = "translateX(-0%)"
        divTotal.forEach(element => {
            element.classList.remove('divVert')
            divTotal[2].classList.add('divVert')
        });


    })


    butt2.addEventListener('click', () => {
        carousel3.style.transform = "translateX(-20%)"

        divTotal.forEach(element => {
            element.classList.remove('divVert')
            divTotal[3].classList.add('divVert')
        });

    })


    butt3.addEventListener('click', () => {
        carousel3.style.transform = "translateX(-40%)"

        divTotal.forEach(element => {
            element.classList.remove('divVert')
            divTotal[4].classList.add('divVert')
        });
    })

    butt4.addEventListener('click', () => {
        carousel3.style.transform = "translateX(-60%)"

        divTotal.forEach(element => {
            element.classList.remove('divVert')
            divTotal[5].classList.add('divVert')
        });
    })

    butt5.addEventListener('click', () => {
        carousel3.style.transform = "translateX(-80%)"

        divTotal.forEach(element => {
            element.classList.remove('divVert')
            divTotal[6].classList.add('divVert')
        });

    })

    butt6.addEventListener('click', () => {
        carousel3.style.transform = "translateX(-100%)"

        divTotal.forEach(element => {
            element.classList.remove('divVert')
            divTotal[7].classList.add('divVert')
        });
    })


    butt7.addEventListener('click', () => {
        carousel3.style.transform = "translateX(-120%)"

        divTotal.forEach(element => {
            element.classList.remove('divVert')
            divTotal[8].classList.add('divVert')
        });
    })

    butt8.addEventListener('click', () => {
        carousel3.style.transform = "translateX(-140%)"

        divTotal.forEach(element => {
            element.classList.remove('divVert')
            divTotal[9].classList.add('divVert')
        });
    })


});