// your answer would go here

$(function (){

    var container = $('#rating-container');
    $('#max-value').val('');

    var update_circles =function (){
        for (var i = 0; i < container.attr('max-value'); i++){
            container.append('<div class="rating-circle"></div>');    
        }
    }

    $('#save-rating').click(function(){
        $.post('http://jquery-edx.azurewebsites.net/api/Rating',
            {
                value: $('.rating-chosen').length,
                maxValue: container.attr('max-value')
            },
            function(data) {
                $('#output').text(data.message);
            }
        );
    })

    $('#update-max-value').click(function(){
        $('.rating-circle').remove();
        input_num = parseInt($('#max-value').val());
        if (Number.isInteger(input_num) && input_num > 0 && input_num < 100){
            container.attr('max-value', input_num);
        }
        else{
            alert('Please input number from 1 to 99');
        }
        update_circles();
    });

    container.delegate('.rating-circle', 'mouseover', function(){
        $('.rating-chosen').addClass('rating-chosen-removed');
        $('.rating-chosen').removeClass('rating-chosen');
        $(this).prevAll().andSelf().addClass('rating-hover');
    });

    container.delegate('.rating-circle', 'mouseout', function(){
        $('.rating-chosen-removed').addClass('rating-chosen');
        $('.rating-chosen').removeClass('rating-chosen-removed');
        $(this).prevAll().andSelf().removeClass('rating-hover');
    });

    container.delegate('.rating-circle', 'click', function(){
        $(this).prevAll().andSelf().addClass('rating-chosen');
        $(this).nextAll().removeClass('rating-chosen-removed rating-chosen');
    });

    update_circles();
});
