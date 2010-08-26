 $(document).ready( function() {
		
	$.fn.jscrollable = function(options){
	
		options = $.extend({
		
			tagreference: null,
			objectreference: null,
			valuereference: null,
		
		}, options);
		
		var name = "#floatMenu";
		var menuYloc = null;
		
		
		menuYloc = parseInt($(name).css("top").substring(0, $(name).css("top").indexOf("px")))
		$(window).scroll(function(){
			var offset = menuYloc + $(document).scrollTop() + "px";
			$(name).animate({
				top: offset
			}, {
				duration: 500,
				queue: false
			});
		});
		
	}
});