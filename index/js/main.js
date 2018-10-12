jQuery(document).ready(function(){
	"use strict";
	$(".friend-slider").owlCarousel({
		loop:!0,
		margin:0,
		nav:!1,
		navText:["",""],
		dots:!0,
		text:!1,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:1},1000:{items:1}}}),
	$(".screen-slider").owlCarousel({loop:!0,margin:0,nav:!0,navText:["",""],dots:!1,text:!1,responsive:{0:{items:1},600:{items:2},700:{items:4},1200:{items:4}}}),
	$(window).scroll(function(){
		$(window).scrollTop()>=60?$(".top-nav").addClass("secondary-dark-blue-bg"):$(".top-nav ").hasClass("secondary-dark-blue-bg")&&$(".top-nav").removeClass("secondary-dark-blue-bg")}),
	$("a").smoothScroll(),$("#nav").onePageNav({currentClass:"active1",changeHash:!1,scrollSpeed:750,scrollThreshold:.5,filter:"",easing:"swing"}),
	$(".navigation__nav li > a").on("click",function(){
		$(".navigation__checkbox:checked").prop("checked",!1)});
});