var slideIndex = 0;
var slides = document.getElementsByClassName("carousel");
var dots = document.getElementsByClassName("dot");

showSlides();

function showSlides() {
    var i;

    for (i = 0; i < slides.length; i++) {
        // initially set the display to none for every image.
        slides[i].style.display = "none";
    }

    slideIndex++;

    // check for boundary
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className = "dot";
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className = "dot active";

    // Change image every 5 seconds
    setTimeout(showSlides, 5000);
}

function transition1() {
    dots[0].className = "dot active";
    dots[1].className = "dot";
    dots[2].className = "dot";

    slides[0].style.display = "block";
    slides[1].style.display = "none";
    slides[2].style.display = "none";
}

function transition2() {
    dots[1].className = "dot active";
    dots[0].className = "dot";
    dots[2].className = "dot";

    slides[0].style.display = "none";
    slides[1].style.display = "block";
    slides[2].style.display = "none";
}

function transition3() {
    dots[2].className = "dot active";
    dots[0].className = "dot";
    dots[1].className = "dot";

    slides[0].style.display = "none";
    slides[1].style.display = "none";
    slides[2].style.display = "block";
}