const $ = (selector) => document.querySelector(selector)
const all$ = (selector) => document.querySelectorAll(selector) 

const flames = ['friends', 'lovers', 'admirers', 'married', 'enemies', 'secret lovers'],
    form = $('.form'),
	outcome = $('section.result'),
    checkButton = $('.reverse'),
    main = $('main'),
    dark = $('dark'),
    light = $('light')

const darken = () => {
    main.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
}

const lighten = () => {
    main.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
}

if (localStorage.getItem('theme') == 'dark') darken()
else if (localStorage.getItem('theme') == 'light') lighten()
else lighten()

let out, num
    

function solve(boyName, girlName) {
    let boy = boyName,
    girl = girlName

    let cancelledTimes = 0
    for (let i = 0; i < boyName.length; i ++) {

        let girlIterator = 0
        while (girlIterator < girl.length) {

            if (boyName[i] === girl[girlIterator]) {
                boy = boy.slice(0, i - cancelledTimes).concat(boy.slice(i - cancelledTimes + 1))
                girl = girl.slice(0, girlIterator).concat(girl.slice(girlIterator + 1))

                cancelledTimes++
                break
            }

            girlIterator++
        }
    }

    const result = [...boy, ...girl].length
    return result
}

function check () {
    [male, female] = all$('input')
    if (male.value != '' && female.value != '') {
        let answer = solve(male.value.toLowerCase(), female.value.toLowerCase())
        if (answer === 0) out = 'Not Compartible'
        else {num = answer % 6 === 0 ? 6 : answer % 6 ; out = flames[num - 1] }
        form.classList.toggle('move')
        outcome.classList.toggle('mount')

        $('#girl').textContent = male.value
        $('#boy').textContent = female.value
        $('h2').textContent = out
        
        checkButton.addEventListener('click', reverse)

        function reverse() {
            form.classList.toggle('move')
            outcome.classList.toggle('mount')
            male.value = ''
            female.value = ''
            checkButton.removeEventListener('click', reverse)
        }
    }
}