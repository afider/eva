(function (exports, $) {
    "use strict";

    $(function () {


		// authorization popup menu animation
		$(".js-popup__ctrl").on('click', function(e) {
		   e.preventDefault();
		   var self = $(this),
		       target = $('.' + self.data('nav-popup'));

		   self.toggleClass('is-open');
		   target.toggleClass('is-open');
		});


		$(document).click(function(e){
		    if ( $(e.target).closest('.js-popup').length === 0 ) {

		        $('.js-popup__body').removeClass('is-open');
		        $('.js-popup__ctrl').removeClass('is-open');
		    }
		    
		});


		$('.video__a').on('click', function(event) {
			event.preventDefault();
			
			var self = $(this);
			var videoSrc = self.attr('href');
			var videoId = videoSrc.substr(videoSrc.length - 11) + '?rel=0&autoplay=1';
			var replaceItem = self.find('img').css('z-index', '0');
			var iFrame = self.find('iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);

		});






    });
}(this, jQuery));