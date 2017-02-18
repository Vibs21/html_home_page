

$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });

});

$(document).ready(function(){
    $('.slider3').bxSlider({
        slideWidth: 5000,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10
    });
});

$(function(){
    $('.carousel').carousel('cycle');
});
