$(function () {
	var $ratingCircles = $('.rating-circle');
	var clickedCircle = undefined;

	function addClazz($this, className) {
		$this.addClass(className);
		$this.prevAll().addClass(className);
	}

	$ratingCircles.hover(function () {
		$ratingCircles.removeClass('rating-chosen');
		addClazz($(this), 'rating-hover');
	});

	$ratingCircles.mouseout(function () {
		$ratingCircles.removeClass('rating-hover');
		if (clickedCircle) {
			addClazz($(clickedCircle), 'rating-chosen');
		}
	});

	$ratingCircles.click(function () {
		clickedCircle = $(this);
		addClazz($(clickedCircle), 'rating-chosen');
	});
});