 const carusel = document.querySelector(".carusel");
 const caruselAllItems = document.querySelectorAll(".carusel-item");
 const caruselItems = document.querySelector(".carusel-items");

 let slideLength = 4;

 if(innerWidth<1200){
    slideLength = 3;
 }
 if(innerWidth < 900){
    slideLength = 2;
 }
 if(innerWidth < 500){
    slideLength = 1;
 }