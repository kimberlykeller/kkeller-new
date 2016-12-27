(function ($) {
	
	$(document).ready( function () {
		var nav = $('nav[class="main-navigation"');
		
		nav.on('scroll', function() {
        nav.addClass("test");
      
     });
     
	});
		
	
})(jQuery);

(function($){
	$(window).scroll(function() {
        if($(window).scrollTop() > 0) {
			$('main-navigation').addClass('html-scrolled');
			$('html').removeClass('html-not-scrolled');
        } else {    
			$('html').addClass('html-not-scrolled');
			$('html').removeClass('html-scrolled');
        }
    });
})(jQuery);