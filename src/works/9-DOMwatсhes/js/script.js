'use strict'

function timer(deadline) {
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

function slider(images, leftArrow, rightArrow, inputBlocks) {
    let counter = 0

    const updateView = () => {
        images.forEach(item => item.style.display = 'none')
        inputBlocks.forEach(item => item.querySelector('label').style.display = 'none')
        images[counter].style.display = 'block'
        inputBlocks[counter].querySelector('input').checked = true
        inputBlocks[counter].querySelector('label').style.display = 'inline-block'
    }
    
    leftArrow.addEventListener('click', () => {
        if(counter > 0) {
            counter -= 1
        } else {
            counter = images.length - 1
        }

        updateView()
    })

    rightArrow.addEventListener('click', () => {
        if(counter < images.length - 1) {
            counter += 1
        } else {
            counter = 0
        }

        updateView()
    })

    inputBlocks.forEach((item, index) => {
        item.querySelector('input').addEventListener('click', () => {
            counter = index
            updateView()
        })
    })


    images[counter].style.display = 'block'
    inputBlocks[counter].querySelector('input').checked = true
    inputBlocks[counter].querySelector('label').style.display = 'inline-block'
}

slider(
    document.querySelectorAll('.order__img > img'),
    document.querySelector('span.left-arrow'),
    document.querySelector('span.right-arrow'),
    document.querySelectorAll('.color-block__color')
)


function carousel(items, leftArrow, rightArrow) {
    let counter = 0

    const updateView = () => {
        items.forEach(item => item.style.display = 'none')
        items[counter].style.display = 'block'
    }
    
    leftArrow.addEventListener('click', () => {
        if(counter > 0) {
            counter -= 1
        } else {
            counter = items.length - 1
        }
        updateView()
    })

    rightArrow.addEventListener('click', () => {
        if(counter < items.length - 1) {
            counter += 1
        } else {
            counter = 0
        }
        updateView() //? 
    })


    items[counter].style.display = 'block'
}

carousel(
    document.querySelectorAll('.carousel__item'),
    document.querySelector('.carousel-arrow-left'),
    document.querySelector('.carousel-arrow-right')
)


function modal(trigger, close, modal) {
    trigger.addEventListener('click', () => modal.classList.add('active'))
    close.addEventListener('click', () => modal.classList.remove('active'))
}
