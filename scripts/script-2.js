var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {            //n взаимодействует напрямую с html
    showSlides(slideIndex += n);    //onclick в html 
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display="none";     //Оператор [] (квадратные скобки) используется для доступа к свойствам объекта (массива или функции), а также для доступа к элементам массива.
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");

    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";
}
