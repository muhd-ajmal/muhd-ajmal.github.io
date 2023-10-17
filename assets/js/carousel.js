(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<i class='fa-solid fa-circle-chevron-left'></i>","<i class='fa-solid fa-circle-chevron-right button.owl-next'></i>"],
	    responsive:{
	      0:{
	        items:1
	      },
		  
	      600:{
	        items:2
	      },
	      1000:{
	        items:4
	      }
	    }
		});

	};
	carousel();

})(jQuery);