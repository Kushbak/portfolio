 // Animate script

 $(document).ready(function() {
     $("#ulMenu").on("click", "a", function(event) {
         event.preventDefault();
         var id = $(this).attr('href'),
             top = $(id).offset().top;
         $('body,html').animate({
             scrollTop: top
         }, 800);
     });
 });


 // show and hide some projects


 $('#viewMore').on('click', function(e) {
     event.preventDefault;
     $('.for-view').toggleClass('active-more');
     this.innerHTML = "Скрыть";
 });


 // change the width of knob canvas  

 let elem = document.getElementsByClassName('knob');

 function skillCanvas() {
     if (screen.width <= 460) {
         elem[0].setAttribute("data-width", 200);
         elem[1].setAttribute("data-width", 200);
         elem[2].setAttribute("data-width", 200);
         elem[3].setAttribute("data-width", 200);
         console.log(1);
     }
 }
 skillCanvas();


 // validation mail

 function validateEmail(email) { 
     jQuery(document).ready(function() {
         jQuery(".modalbox").fancybox();
         jQuery("#contact").submit(function() {
             return false;
         });
         jQuery("#send").on("click", function() {
             var emailval = jQuery("#email").val();
             var namevl = jQuery("#name").val(); 
             var msgval = jQuery("#msg").val();
             var msglen = msgval.length;
             var mailvalid = validateEmail(emailval);
             if (mailvalid == false) {
                 jQuery("#email").addClass("error");
             } else if (mailvalid == true) {
                 jQuery("#email").removeClass("error");
             }
             if (mailvalid == false) {
                 jQuery("#name").addClass("error");
             } else if (mailvalid == true) {
                 jQuery("#name").removeClass("error");
             } 
             if (msglen < 8) {
                 jQuery("#msg").addClass("error");
             } else if (msglen >= 8) {
                 jQuery("#msg").removeClass("error");
             }
             if (mailvalid == true && msglen >= 8) {
                 // если обе проверки пройдены
                 // сначала мы скрываем кнопку отправки
                 $("#send").replaceWith("<em>отправка...</em>");
                 jQuery.ajax({
                     type: 'POST',
                     url: '../sendmessage.php',
                     data: jQuery("#contact").serialize(),
                     success: function(data) {
                         if (data == "true") {
                             jQuery("#contact").fadeOut("fast", function() {
                                 jQuery(this).before("<p><strong>Ваше сообщение отправлено</strong></p>");
                                 setTimeout("jQuery.fancybox.close()", 1000);
                             });
                         }
                     }
                 });
             }
         });
     });
 };