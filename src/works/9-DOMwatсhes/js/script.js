'use strict'

const timer = (deadline) => {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    
    const countDown = new Date(deadline).getTime()

    const x = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDown - now

        ;[...document.querySelectorAll('.days > .time')].forEach(item => {
            item.innerText = Math.floor(distance / (day))
        })
        ;[...document.querySelectorAll('.hours > .time')].forEach(item => {
            item.innerText = Math.floor((distance % (day)) / (hour))
        })
        ;[...document.querySelectorAll('.minutes > .time')].forEach(item => {
            item.innerText = Math.floor((distance % (hour)) / (minute))
        })
        ;[...document.querySelectorAll('.seconds > .time')].forEach(item => {
            item.innerText = Math.floor((distance % (minute)) / second)
        })
    
        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //}
    }, second)
}

timer('2021-06-01')

const slider = (images, leftArrow, rightArrow, inputs) => {
    let counter = 0
    const input = inputs[counter].querySelector('input')

    leftArrow.addEventListener('click', () => {
        if(counter > 0) {
            counter -= 1
        } else {
            counter = images.length - 1
        }

        images.forEach(item => item.style.display = 'none')
        images[counter].style.display = 'block'

        inputs.forEach(item => (item.querySelector('input').checked = false))
        input.checked = true
    })

    rightArrow.addEventListener('click', () => {
        if(counter < images.length - 1) {
            counter += 1
        } else {
            counter = 0
        }
        images.forEach(item => item.style.display = 'none')
        images[counter].style.display = 'block'
    })

    images[counter].style.display = 'block'
}

slider(
    document.querySelectorAll('.order__img > img'),
    document.querySelector('span.left-arrow'),
    document.querySelector('span.right-arrow'),
    document.querySelectorAll('.color-block__color')
)