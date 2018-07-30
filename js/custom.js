/***************** Banner Slider Javascript **************************/

$(document).ready(function () {
	$('.banner-slider').owlCarousel({
		loop:true,          
		responsiveClass:true,
		animate: 'slide',
		autoplay:false,
		dots: true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
		responsive:{
		    0:{
		        items:1        
		    }
		}
	});
});

/******************** Animate JS****************/
new WOW().init();
/********************** Search JS *****************/
$(document).ready(function(){
	var submitIcon = $('.searchbox-icon');
	var inputBox = $('.searchbox-input');
	var searchBox = $('.searchbox');
	var isOpen = false;
	submitIcon.click(function(){
	    if(isOpen == false){
	        searchBox.addClass('searchbox-open');
	        inputBox.focus();
	        isOpen = true;
	    } else {
	        searchBox.removeClass('searchbox-open');
	        inputBox.focusout();
	        isOpen = false;
	    }
	});  
	submitIcon.mouseup(function(){
	        return false;
	    });
	searchBox.mouseup(function(){
	        return false;
	    });
	$(document).mouseup(function(){
        if(isOpen == true){
            $('.searchbox-icon').css('display','block');
            submitIcon.click();
        }
    });
});
function buttonUp(){
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
        $('.searchbox-icon').css('display','none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display','block');
    }
}
/************** Price Filter JS ***************************/
function showProducts(minPrice, maxPrice) {
    $("#products li").hide().filter(function() {
        var price = parseInt($(this).data("price"), 10);
        return price >= minPrice && price <= maxPrice;
    }).show();
}
$(function() {
    var options = {
        range: true,
        min: 0,
        max: 500,
        values: [50, 300],
        slide: function(event, ui) {
            var min = ui.values[0],
                max = ui.values[1];
            $("#amount").val("$" + min + " - $" + max);
            showProducts(min, max);
        }
    }, min, max;
    $("#slider-range").slider(options);
    min = $("#slider-range").slider("values", 0);
    max = $("#slider-range").slider("values", 1);
    $("#amount").val("$" + min + " - $" + max);
    showProducts(min, max);
});
/********************* Filter Panel ******************************/
function showFilters() {
	$( ".open-filter-toggle-btn" ).click(function() {
	 	$(".left-panel").addClass("show-panel");
	 	$(".left-panel").removeClass("hide-panel");
	 	$(".open-filter-toggle-btn").hide();
	 	$(".close-filter-toggle-btn").show();
	});
}
$(document).ready(function(){
	showFilters();
});
$(window).resize(function() {
	showFilters();
});
function hideFilters() {
	$( ".close-filter-toggle-btn" ).click(function() {
	 	$(".left-panel").removeClass("show-panel");

	 	$(".left-panel").addClass("hide-panel");
	 	$(".open-filter-toggle-btn").show();
	 	$(".close-filter-toggle-btn").hide();
	});
}
$(document).ready(function(){
	hideFilters();
});
$(window).resize(function() {
	hideFilters();
});
/********** Contact Link on Same page **********************/
if($("#homepage-flag").length > 0) {    
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top - 130
	      }, 1000);
	      return false;
	    }
	  }
	});
}
/**************** Map Show Hide *******************************/
$(".arrow-up").hide();
$(".map-toggle-btn").click(function(){
    $(".show-map").toggleClass("hide-map", 1000); 
    $(this).find(".arrow-up, .arrow-down").toggle();
}); 
/**************** Stop map zooming JS *******************************/
$('.map-container')
.click(function(){
	$(this).find('iframe').addClass('clicked')})
.mouseleave(function(){
	$(this).find('iframe').removeClass('clicked')});