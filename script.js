const flames = ['friends', 'lovers', 'admirers', 'married', 'enemies', 'secret lovers'],
    form = document.querySelector('.form'),
	outcome = document.querySelector('section.result'),
    checkButton = document.getElementsByTagName('button')[1]

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
    [male, female] = document.getElementsByTagName('input')
    if (male.value != '' && female.value != '') {
        let answer = solve(male.value.toLowerCase(), female.value.toLowerCase())
        if (answer === 0) out = 'Not Compartible'
        else {num = answer % 6 === 0 ? 6 : answer % 6 ; out = flames[num - 1] }
        form.classList.toggle('move')
        outcome.classList.toggle('mount')

        document.querySelector('#girl').textContent = male.value
        document.querySelector('#boy').textContent = female.value
        document.querySelector('h2').textContent = out
        
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