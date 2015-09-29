$(function() {

    // selection
    var slctn

    // Draw
    drawCircles()

    $('div#rating-container').delegate('.rating-circle', 'mouseenter', function() {
        $('.rating-circle').removeClass('rating-chosen')
        $(this).addClass('rating-hover').prevAll().addClass('rating-hover')
    });

    $('div#rating-container').delegate('.rating-circle', 'mouseout', function() {
        $(this).removeClass('rating-hover')
        $(this).prevAll().removeClass('rating-hover')
        if (slctn)
        $(slctn).addClass('rating-chosen').prevAll().addClass('rating-chosen')
    });

    $('div#rating-container').delegate('.rating-circle', 'click', function() {
        $(this).addClass('rating-chosen').prevAll().addClass('rating-chosen')
        slctn=this;
    });

    function drawCircles() {
        for (var i = 0; i < $('#rating-container').attr('max-value'); i++)
        $('#rating-container').append('<div class="rating-circle"></div>');
    }

    $("#update-max-value").click( function() {
        var newMax = $('input#max-value').val();
        $('#rating-container').attr('max-value', newMax)
        $('#rating-container').empty();
        drawCircles();
    });

})
