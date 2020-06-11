// scroll
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



// slick

$('.feedback').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


//

$(document).ready(function() {
    var iconStrokeColor = '#FF0000'; /* цвет иконок */
    $('img').each(function() {
        var w, h, src;
        if ($(this).attr('src').indexOf('.svg') != -1) {
            src = $(this).attr('src');
            w = $(this).width();
            h = $(this).height();
            $(this).after('<div style="width: ' + w + 'px; height: ' + h + 'px;display: inline-block;background: ' + iconStrokeColor + ';-webkit-mask-image: url(' + src + ');mask-image:url(' + src + ');"></div>');
            $(this).remove();
        }
    })
});



// Timer

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

