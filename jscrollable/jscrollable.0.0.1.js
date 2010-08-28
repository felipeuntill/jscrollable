 $(document).ready( function() {
	
	//Initializing the plugin	
	$.fn.jScrollable = function(options){
		
		//declaring a extended variable to alocate all options.
		options = $.extend({
			
			// if the scrollable object want move on the Y axis.
			ymove			: true,
			// if the scrollable object want move on the X axis.
			xmove			: false,
			// if the scroll move are animated.
			animate		 	: true,
			// variavle resposable of alocate the delay of the scroll move.
			scrolldelay		: 500
				
		}, options);
		
		referer = $(this);
		referenceaxis = $(this).position().top;
		$(referer).css({ position : 'absolute' , top : 'referenceaxis'});

		$(window).scroll(function(){
			
			var offset = referenceaxis + $(document).scrollTop() + "px";
			
			$(referer).animate({
				top: offset
			}, {
				duration: 500,
				queue: false
			});
			
			
		});
		
	};
	
});