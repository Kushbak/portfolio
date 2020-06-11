// slick

$('.feedback').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});

// animate

$(document).ready(function() {
    $("body").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });
});

// style
$("#word_2").hide();
let inp_1 = document.getElementById('inp_1'),
    inp_2 = document.getElementById('inp_2'),
    word_1 = document.getElementById('word_1'),
    word_2 = document.getElementById('word_2'),
    img_1 = document.getElementById('img_1'),
    img_2 = document.getElementById('img_2');



function app(a) {
    if (a == 2) {
        word_1.style.display = "none";
        word_2.style.display = "inline-block";

        img_1.style.display = "none";
        img_2.style.display = "inline-block";
    } else {
        word_1.style.display = "inline-block";
        word_2.style.display = "none";

        img_1.style.display = "inline-block";
        img_2.style.display = "none";
    }
};


// Timer1


// // Set the date we're counting down to
// var countDownDate = new Date("June 7, 2019 23:23:59").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);


//     // Display the result in the element with id="demo"
//     document.querySelectorAll("p.demo").innerHTML = days + 'дней ' + hours + 'часов ' + minutes + 'минут ' + seconds + 'секунд'; 




//     if (days < 10) {
//         days = '0' + days;
//     }
//     // If the count down is finished, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.querySelectorAll("p.demo").innerHTML = "EXPIRED";
//     }
// }, 1000);





// Timer 2


let second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.querySelector('.days').innerText = Math.floor(distance / (day)),
      document.querySelector('.hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.querySelector('.minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.querySelector('.seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)



// Timer 3


let second1 = 1000,
      minute1 = second1 * 60,
      hour1 = minute1 * 60,
      day1 = hour1 * 24;

let countDown1 = new Date('Sep 30, 2020 00:00:00').getTime(),
    x1 = setInterval(function() {

      let now1 = new Date().getTime(),
          distance1 = countDown1 - now1;

      document.querySelector('.days1').innerText = Math.floor(distance1 / (day1)),
      document.querySelector('.hours1').innerText = Math.floor((distance1 % (day1)) / (hour1)),
      document.querySelector('.minutes1').innerText = Math.floor((distance1 % (hour1)) / (minute1)),
      document.querySelector('.seconds1').innerText = Math.floor((distance1 % (minute1)) / second1);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second1)