import { makeSlides, addMoreNums, maxPow } from './index.js'

let i = 0;
let t = 0;
let number = 0
let ready = false
let exponent = 0; let button = document.getElementById('generate')
let yesbutton = document.getElementById('yes')
let nobutton = document.getElementById('no')
let textbox = document.getElementById('text')
let container = document.getElementById('container')
let slideContainer = document.getElementById('slide-container')
let ui = document.getElementById('ui')
let preview = document.getElementById('preview')
let status = document.getElementById('status')


setInterval(updatePreview, 500)
button.addEventListener('click', () => {
    if (typeof eval(textbox.value) === 'number') {
        sessionStorage.clear()
        makeSlides(eval(textbox.value));
        status.innerHTML =`Question ${i + 1} of ${sessionStorage.length}`
        displaySlide()
        i++;
        console.log(i)
        container.style.visibility = 'visible'
        button.setAttribute('disabled', 'disabled');
    } else {
        alert('Something went wrong. Please try again later.')
    }


})
yesbutton.addEventListener('click', () => {
    if (i < sessionStorage.length) {
        status.innerHTML = `Question ${i+1} of ${sessionStorage.length}`
        slideContainer.innerHTML = ''
        displaySlide()
        number = number + Math.pow(2, i - 1);
        console.log(number)
        console.log(i)
        console.log(sessionStorage.length)
        i++;

    } else {
        number = number + Math.pow(2, i - 1);
        container.removeChild(document.getElementById('question'))
        ui.innerHTML = ''
        slideContainer.innerHTML = ''
        showResult()
    }
})
nobutton.addEventListener('click', () => {
    if (i < sessionStorage.length) {
        status.innerHTML = `Question ${i} of ${sessionStorage.length}`
        slideContainer.innerHTML = ''
        displaySlide()
        console.log(number)
        console.log(i)
        console.log(sessionStorage.length)
        i++;
    } else {
        container.removeChild(document.getElementById('question'))
        ui.innerHTML = ''
        slideContainer.innerHTML = ''
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
    container.removeChild(status)
    container.removeChild(yesbutton)
    container.removeChild(nobutton)
    container.appendChild(result)
}
function getPreview(num) {
    if (num === Math.pow(2, t)) {
        exponent = t;
        ready = true;
    } else if (num > Math.pow(2, t)) {
        t++;
        maxPow(num);
    } else if (num < Math.pow(2, t)) {
        t = t - 1;
        exponent = t;
        ready = true
    }
}
function updatePreview() {
    getPreview(eval(textbox.value))
    if (ready) {
        preview.innerHTML = JSON.stringify(exponent + 1)
    }
}