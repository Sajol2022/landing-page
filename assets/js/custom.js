(function($) {
	///=============  Background Image  =============\\\
	$("[data-background]").each(function() {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
	///=============  Responsive Menu  =============\\\
	$('.header__area-main-menu').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="fal fa-times"></i>'
	});	
	///=============  Menu Bar Sticky  =============\\\
	$(window).on('scroll', function () {
		var scrollDown = $(window).scrollTop();
		if (scrollDown < 135) {
			$(".header__area-menu").removeClass("header__area-menu-sticky-menu");
		} else {
			$(".header__area-menu").addClass("header__area-menu-sticky-menu");
		}
	});	
	///=============  Counter Up  =============\\\
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});	
	///=============  Inner Page  =============\\\		
	var swiper = new Swiper(".inner__page-slider", {
		slidesPerView: 4,
		loop: true,		
		speed: 1500,
		spaceBetween: 30,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			991: {
				slidesPerView: 3
			},
			1200: {
				spaceBetween: 25,
				slidesPerView: 4
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	///=============  Theme Loader  =============\\\
	$(window).on("load", function() {
		$(".theme-loader").fadeOut(500);
	});
	///============= Scroll To Top =============\\\
	var scrollPath = document.querySelector('.scroll-up path');
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
	scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updatescroll = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength / height);
		scrollPath.style.strokeDashoffset = scroll;
	}
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.scroll-up').addClass('active-scroll');
		} else {
			jQuery('.scroll-up').removeClass('active-scroll');
		}
	});
	jQuery('.scroll-up').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
})(jQuery);