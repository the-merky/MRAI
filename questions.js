import { makeSlides, addMoreNums ,maxPow} from './index.js'
let button = document.getElementById('generate')
let yesbutton = document.getElementById('yes')
let nobutton = document.getElementById('no')
let i = 0;
let textbox = document.getElementById('text')
let container = document.getElementById('container')
let slideContainer = document.getElementById('slide-container')
let number = 0
button.addEventListener('click', () => {
    if (typeof eval(textbox.value) === 'number') {
        /*
        '
        makeSlides(eval(textbox.value));
        for (i = 0; i < sessionStorage.length;) {
            let newSlide = container.appendChild(document.createElement('div'));
            newSlide.setAttribute('id', JSON.stringify(Math.pow(2, i)));
            newSlide.setAttribute('class', 'slide')
            i++;
        };
        for (i = 0; i < sessionStorage.length;) {
            let array = JSON.parse(sessionStorage.getItem(JSON.stringify(Math.pow(2, i))));
            let slide = document.getElementById(JSON.stringify(Math.pow(2, i)))
            for (let a = 0; a < array.length;) {
                let newNumber = slide.appendChild(document.createElement('div'))
                newNumber.innerHTML = array[a] + ', ';
                a++;
            }
            i++;
        */
        sessionStorage.clear()
        makeSlides(eval(textbox.value));
        displaySlide(i)
        container.style.visibility = 'visible'
        button.setAttribute('disabled', 'disabled');
    } else {
        alert('Something went wrong. Please try again later.')
    }


})
yesbutton.addEventListener('click', () => {
    number = number + Math.pow(2, i)
    if (i+1< sessionStorage.length) {
        slideContainer.innerHTML = ''
        console.log(number)
        i++;
        displaySlide(i)
    } else {
        showResult()
    }
})
nobutton.addEventListener('click', () => {
    if (i+1< sessionStorage.length) {
        slideContainer.innerHTML = ''
        i++;
        displaySlide(i)
    } else {
        showResult()
    }

})
function displaySlide() {
    slideContainer.innerHTML = ''
    let newSlide = slideContainer.appendChild(document.createElement('div'));
    newSlide.setAttribute('id', JSON.stringify(i));
    newSlide.setAttribute('class', 'slide')
    let array = JSON.parse(sessionStorage.getItem(JSON.stringify(Math.pow(2, i))));
    for (let a = 0; a < array.length;) {
        let newNumber = newSlide.appendChild(document.createElement('div'))
        if (a + 1 < array.length) {
            newNumber.innerHTML = array[a] + ', ';
        } else {
            newNumber.innerHTML = array[a]
        }
        a++;
    }
}
function showResult() {
    let result = document.createElement('p')
    result.setAttribute('class', 'result')
    result.innerHTML = `Your Number is ${number}!`
    container.removeChild(yesbutton)
    container.removeChild(nobutton)
    container.appendChild(result)
}
