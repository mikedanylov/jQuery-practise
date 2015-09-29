$(function() {
    
    update_all();
    $(document).delegate('div.rating-circle','mouseout',mout);
    $(document).delegate('div.rating-circle','click',mclick);
    $(document).delegate('div.rating-circle','mouseenter',min);

    var index = -1;
    $('#update-max-value').click(function(){
        update_all();
    });

    function min(){
        $('#in').text(index);
        // Clean yellow when hovering
        $('.rating-circle').removeClass('rating-hover');
        $('.rating-circle').removeClass('rating-chosen');

        // Make this and to the left yellow
        $(this).addClass('rating-hover');
        $(this).prevUntil('#rating-container').addClass('rating-hover');
    }


    function mclick(){
        $('.rating-circle').removeClass('rating-chosen');
        $(this).addClass('rating-chosen');
        $(this).prevUntil('#rating-container').addClass('rating-chosen');
        index = $(this).index();
    }

    function mout(){
        // Remove all hover classes when done hovering
        $(this).removeClass('rating-hover');
        $(this).prevUntil('#rating-container').removeClass('rating-hover');

        if(index>=0){
            $($('div.rating-circle').get(index)).addClass('rating-chosen');
            $($('div.rating-circle').get(index)).prevUntil('#rating-container').addClass('rating-chosen');
        }
    }

    function update_all(){
        // reset div where circles need to be drawn
        $('#rating-container').html("");

        // update the value of max-value
        if($('#max-value').val()){
            $('#rating-container').attr('max-value',$('#max-value').val());
        }

        // draw empty circles
        var nr = $('#rating-container').attr('max-value');
        for(i=0;i<nr;i++){
            $('#rating-container').append('<div class="rating-circle"></div>');
        }
    }
});