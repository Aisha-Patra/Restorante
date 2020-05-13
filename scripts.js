$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause')
            $('#carouselButton').children('span').addClass('fa-play')
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play')
            $('#carouselButton').children('span').addClass('fa-pause')
        }
    });
    $('#login-button').click(function(){
        $('#loginModal').modal('toggle');
        $('#loginModal').modal('show');
    });
    $('#reserve-button').click(function(){
        $('#reserve').modal('toggle');
        $('#reserve').modal('show');
    });
    $('#cancel-button').click(function() {
        $('#loginModal').modal('hide');  
    })
    $('#dismiss-button').click(function() {
        $('#loginModal').modal('hide');
    });
    $('#reserve-cancel').click(function() {
        $('#reserve').modal('hide');
    });
    $('#reserve-dismiss').click(function() {
        $('#reserve').modal('hide');
    });
});