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
	// authorization popup menu animation ---END--


	// start playing a video on click
	$('.video__a').find('iframe').attr('src', ''); // for IE, not to cash iframe and playing video after page loading

	$('.video__a').on('click', function(event) {
		event.preventDefault();
		
		var self = $(this);
		var videoSrc = self.data('video');
		var videoId = videoSrc.substr(videoSrc.length - 11) + '?rel=0&autoplay=1';

		self.find('img').css('z-index', '0');
		self.find('iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);

	});
	// start playing a video on click ---END--


	// got to the video on click on button
	$(".js-go-to").click(function(e) {
		e.preventDefault();
		var self = $(this),
		    target = $('.' + self.data('go-to'));

	    $('html, body').animate({
	        scrollTop: target.offset().top
	    }, 800);
	});
	// got to the video on click on button ---END--


	// words animation
	var maxW = 0;
	var wordItems = $('.words__i');
	var activeItemClass = 'words__i_active';
	var activeItemClass2 = 'words__i_next';
	var itemsNumber = wordItems.length;
	var counter = $('.words__i_active').index()+2;

	var timer = setInterval( showHide, 4000);

	wordItems.each( function() {
		
		var self = $(this);

		var itemW = self.width();

		if (itemW > maxW) {	maxW = itemW; }

	});
	$('.words').css('width', maxW);
	
	function showHide () {
		if (counter === 0) { counter++;	}

		wordItems.removeClass(activeItemClass);
		wordItems.removeClass(activeItemClass2);
		wordItems.eq(counter-1).addClass(activeItemClass);
		wordItems.eq(counter).addClass(activeItemClass2);

		if (counter === itemsNumber) { 

			counter = 0;
			wordItems.eq(0).addClass(activeItemClass2);

		} else {

			 counter++;
		}
		
	} // showHide
	// words animation ---END--

	// logic for faq block

	// clone elements
	var faqItems = $('.faq__i');
	var faqItemsH = faqItems.find('.faq__h');
	var faqDescContainer = $('.faq__column_description');
	var activeClass = 'is-acitve';

	faqItems.each( function() {
		var self = $(this);
		var faqH = self.find('.faq__h').text();
		var faqDesc = self.find('.faq__description').html();
		var isActive = '';

		if ( self.hasClass(activeClass) ) { isActive = activeClass; }

		faqDescContainer.append('<div class="faq__i-big ' + isActive + '"><div class="faq__h-big">' + faqH + '</div><div class="faq__description-big">' + faqDesc + '</div></div>');
		
	});
	// clone elements ---END--
	
	// toggling active item

	faqItemsH.on('click', function(event) {
		event.preventDefault();
		var self = $(this);
		var selfItem = self.parent();
		var itemIndex = selfItem.index();
		var bigItems = $('.faq__i-big');

		console.log(bigItems.eq(itemIndex));

		faqItemsH.parent().removeClass(activeClass);
		selfItem.addClass(activeClass);

		bigItems.removeClass(activeClass);
		bigItems.eq(itemIndex).addClass(activeClass);

		
		
	});

	// toggling active item ---END--

	// logic for faq block ---END--

});
