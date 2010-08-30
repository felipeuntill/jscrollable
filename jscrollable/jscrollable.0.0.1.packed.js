/*!
 * jScrollable Javascript Plugin v0.0.1
 * http://code.google.com/p/jscrollable/
 *
 * Copyright 2010, Felipe Assuncao
 * Dual licensed under the GPL Version 2 license.
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 *
 * Date: 29/09/2010
 */

$(document).ready(function(){$.fn.jScrollable=function(options){options=$.extend({referer:$(this),yaxis:$(this).position().top,xaxis:$(this).position().left,ymove:true,xmove:false,scrolldelay:500},options);$(options.referer).css({position:'absolute',top:options.yaxis,left:options.xaxis});$(window).scroll(function(){var yoffset=options.yaxis+$(document).scrollTop()+"px";var xoffset=options.xaxis+$(document).scrollLeft()+"px";if(options.ymove&&options.xmove){$(options.referer).animate({top:yoffset,left:xoffset},{duration:options.scrolldelay,queue:false})}else if(options.ymove&&options.xmove==false){$(options.referer).animate({top:yoffset},{duration:options.scrolldelay,queue:false})}else if(options.ymove==false&&options.xmove){$(options.referer).animate({left:xoffset},{duration:options.scrolldelay,queue:false})}else{return"You don't need this plugin, disable it"}})}});