$(function(){
    var container = $('#rating-container');
    var maxVal = container.attr('max-value');
    var rating = -1;

    var updateMaxVal = function(){
        container.empty();
        for (var i = maxVal; i > 0; i--) {
            container.append('<div class="rating-circle"></div>');
        };
    };

    $('#update-max-value').click(function(){
        rating = -1;
        maxVal = $('#max-value').val() || maxVal;
        updateMaxVal();
    });

    container.delegate('.rating-circle', 'mouseover', function(){
        container.children().removeClass('rating-chosen');
        $(this).prevAll().andSelf().addClass('rating-hover');
    });

    container.delegate('.rating-circle', 'mouseout', function(){
        container.children().removeClass('rating-hover');
        if(rating>= 0){
            var selectedCircle = $(container.children().get(rating));
            selectedCircle.prevAll().andSelf().addClass('rating-chosen');
        };
    });

    container.delegate('.rating-circle', 'click', function(){
        rating = container.children().index($(this));
        container.children().removeClass('rating-chosen');
        $(this).prevAll().andSelf().addClass('rating-chosen');
    });

    updateMaxVal();
});