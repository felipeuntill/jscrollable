/*!
 * jScrollable Javascript Plugin v0.0.1
 * http://code.google.com/p/jscrollable/
 *
 * Copyright 2010, Felipe Assuncao
 * Licensed by the GPL Version 2.
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 *
 * Date: 29/08/2010
 */

 $(document).ready( function() {
	
	// Initializing the plugin	
	$.fn.jScrollable = function(options){
		
		// Declaring extended variable to save all options.
		options = $.extend({
			// Variable responsible by save the instantiated object
			referer   		: $(this),
			// Variable responsible by save the Y axis of the instantiated object before the move.
			yaxis 			: $(this).position().top,
			// Variable responsible by save the X axis of the instantiated object before the move.
			xaxis 			: $(this).position().left,
			// If the scrollable object want to move on the Y axis.
			ymove			: true,
			// If the scrollable object want to move on the X axis.
			xmove			: false,
			// Variable responsible by save the delay of the scroll move.
			scrolldelay		: 500
				
		}, options);
		
		// Setting the position absolute to matched object and our axis references.
		$(options.referer).css({ 
								position	 : 'absolute' ,
								top			 : options.yaxis,
								left		 : options.xaxis
								});
								
		// The Scroll() event.
		$(window).scroll(function(){
			
			// variable responsible of save the new position of the matched object on the Y axis.
			var yoffset = options.yaxis + $(document).scrollTop() + "px";
			// variable responsible of save the new position of the matched object on the X axis.
			var xoffset = options.xaxis + $(document).scrollLeft() + "px";
			
			// if ymove = true and  xmove = true, the object want to be moved on the Y and X axis.
			if (options.ymove && options.xmove) {
		
				// animating the plugin to move the object on the Y and X axis with the (scrolldelay) value of delay.		 
				$(options.referer).animate({
					top		: yoffset,
					left	: xoffset
					}, {
						duration: options.scrolldelay,
						queue: false
				});
			// if ymove = true and  xmove = false, the object want to be moved on the Y axis.	
			} else if ( options.ymove && options.xmove == false ) {
				
				// animating the plugin to move the object on the Y axis with the (scrolldelay) value of delay.
				$(options.referer).animate({
					top		: yoffset
					}, {
						duration: options.scrolldelay,
						queue: false
				});
			// if ymove = false and  xmove = true, the object want to be moved on the X axis.	
			} else if ( options.ymove == false && options.xmove ) {
				
				// animating the plugin to move the object on the X axis with the (scrolldelay) value of delay.
				$(options.referer).animate({
					left		: xoffset
					}, {
						duration: options.scrolldelay,
						queue: false
				});
				
			}
			// if ymove = false and  xmove = false, the object dont wants to be moved.
			else {
				
				// if the script go through all the conditions and get here,
				return "You don't need this plugin, disable it";
				
			}
			
		});
		
	};
	
});