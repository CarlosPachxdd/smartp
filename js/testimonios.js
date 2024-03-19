$(document).ready(function(){
    $(".slick-carousel").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        slidesToShow: 1, // Mostrar un testimonio a la vez
        slidesToScroll: 1 // Desplazar un testimonio a la vez
    });
});
