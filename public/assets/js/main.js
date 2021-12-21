$(document).ready(function(){
    // sticky menu
    $(window).on("scroll", function(){
        
        if($(window).scrollTop()) {
            $('.w3s-navigation').addClass('w3s-sticky');
        } else {
            $('.w3s-navigation').removeClass('w3s-sticky');
        }
    })

    // Header slider (Home)
    $('.feature-product-slider').owlCarousel({
        loop:true,
        margin:5,
        responsiveClass:true,
        autoplay:false,
        autoplayTimeout: 6000,
        autoplayHoverPause:true,
        navText:['<span class="text-dark font-22 link-hover"><i class="bx bx-left-arrow"></i></span>','<span class="text-dark font-22 link-hover"><i class="bx bx-right-arrow"></i></span>'],
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    })
});

//Mixitup
var confing = document.querySelector(".mymixitup");
var mixer = mixitup(confing);
