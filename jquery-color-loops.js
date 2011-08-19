
(function($){
    $.fn.loop = function(time){
	//this function can take unlimited arguments
	//first one is integer(miliseconds)
	//all the othes hexadecimal numbers for color
	//it will fade from one color to the other repeatedly..
	//example: $('body').backgroundFade(1000, '#fff', '#000');
	if(typeof(arguments[1]) == 'object'){
	    var args = arguments[1];
	}
	else{
	    var args = $.makeArray(arguments)
	    var args = args.slice(1);
	    
	}
	var length =   args.length;

	return this.each(function recurse(){
	    var self = this;
	    
	    for(var i = 0;i < length;i++){
		$(self).animate({
		    backgroundColor: args[i]
		},time,function(){
		    if(i==length) recurse.call(self);
		})
	    }
	    
	});
    };
})(jQuery);




(function($){
    $.fn.rand-loop = function(time){
	//same as the loop function above but with a random style
	//it never displays the same color twice in a row...
	if(typeof(arguments[1]) == 'object'){
	    var args = arguments[1];
	}
	else{
	    var args = $.makeArray(arguments)
	    var args = args.slice(1);
	    
	}
	var length = args.length -1;

	return this.each(function recurse(){

	    var self = this;
	    
	    for(var i = 0;i < length;i++){

		var num = Math.round(Math.random()*length);
		
		if(num!==stored){
		    $(self).animate({
			backgroundColor: args[num]
		    },1000,function(){
			if(i >= length){
			    recurse.call(self);
			}
		    })
		    
		}
		else if(num === stored) {
		    continue;
		}
		var stored = num;
	    }
	});
    };
})(jQuery);





