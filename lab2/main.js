// your answer would go here

$(function (){

    update_circles();

    function update_circles(){
        for (var i = 0; i < $('#rating-container').attr('max-value'); i++){
            $('#rating-container').append('<div class="rating-circle"></div>');    
        }
    }

    $('#update-max-value').click(function(){
        $('.rating-circle').remove();
        input_num = parseInt($('#max-value').val());
        if (Number.isInteger(input_num) && input_num > 0 && input_num < 100){
            $('#rating-container').attr('max-value', input_num);
        }
        else{
            alert('Please input number from 1 to 99');
        }
        update_circles();
    });

    $('#rating-container').delegate('.rating-circle', 'mouseover', function(){
        $('.rating-chosen').addClass('rating-chosen-removed');
        $('.rating-chosen').removeClass('rating-chosen');
        $(this).prevAll().andSelf().addClass('rating-hover');
    });

    $('#rating-container').delegate('.rating-circle', 'mouseout', function(){
        $('.rating-chosen-removed').addClass('rating-chosen');
        $('.rating-chosen').removeClass('rating-chosen-removed');
        $(this).prevAll().andSelf().removeClass('rating-hover');
    });

    $('#rating-container').delegate('.rating-circle', 'click', function(){
        $(this).parent().children().removeClass('rating-chosen');
        $(this).prevAll().andSelf().addClass('rating-chosen');
        $(this).nextAll().removeClass('rating-chosen-removed');
    });

    $(".rating-circle").click(
        function(){ 
            circle_click(this);
        }
    );
});
