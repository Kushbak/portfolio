const timer = (deadline) => {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    
    const countDown = new Date(deadline).getTime()

    const x = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDown - now
    
        document.querySelector('.days > .time').innerText = Math.floor(distance / (day))
        document.querySelector('.hours > .time').innerText = Math.floor((distance % (day)) / (hour))
        document.querySelector('.minutes > .time').innerText = Math.floor((distance % (hour)) / (minute))
        document.querySelector('.seconds > .time').innerText = Math.floor((distance % (minute)) / second)
    
        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //}
    }, second)
}

timer('2021-06-01')