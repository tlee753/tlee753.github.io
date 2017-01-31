$(document).ready(function() {
    //smoothScroll(1000);

    $('.handle').on('click', function(){
        //document.body.style.backgroundColor = '#000000';
        $('#navbar ul').toggleClass('show');
        $('#navbar-menu svg').toggleClass('show');
    });

    $("img").unveil(1000);
});

function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}


