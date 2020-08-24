const projects = document.querySelectorAll('.work-item');
 
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

// adding bg images for works 
const addBackgroundImg = () => {
    for(let i = projects.length; i > 0; i--){ 
        projects[projects.length - i].style.background = `url(img/works/myworks${i}.jpg) center center no-repeat`;  
        projects[projects.length - i].style.backgroundSize = "cover";  
    }  
}
addBackgroundImg();


 // show and hide some projects 
const toggleProjectsDisplay = () => {
    const viewBtn = document.querySelector('#viewMore');

    projects.forEach((item, i) => {
        if(i > 5){
            item.classList.add('for-view');
        }
    })

    viewBtn.addEventListener('click', () => {
        projects.forEach((item, i) => {
            if(i > 6){
                item.classList.toggle('for-view');
            }
        })
        if(projects[projects.length-1].classList.contains('for-view')){
            viewBtn.textContent = 'Показать еще'; 
        } else {
            viewBtn.textContent = 'Скрыть';
        }
    })  
}
toggleProjectsDisplay(); 


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