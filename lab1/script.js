// your answer would go here

$(function (){

	var rated = false;
	var index;

	$(".rating-circle").hover(
		function(){
			$('.rating-chosen').addClass('rating-chosen-removed');
			$('.rating-chosen').removeClass('rating-chosen');
			$(this).addClass('rating-hover');
			$(this).prevAll().addClass('rating-hover');
	    },
	    function(){
			$('.rating-chosen-removed').addClass('rating-chosen');
			$('.rating-chosen').removeClass('rating-chosen-removed');
	    	$(this).removeClass('rating-hover');
			$(this).prevAll().removeClass('rating-hover');
		}
	);

	$(".rating-circle").click(
		function(){	
			$(this).parent().children().removeClass('rating-chosen');
	    	$(this).addClass('rating-chosen');
	    	$(this).prevAll().addClass('rating-chosen');
	    	$(this).nextAll().removeClass('rating-chosen-removed');
	    }
	);
})

