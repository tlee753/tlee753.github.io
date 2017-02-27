$(document).ready(function() {
    //smoothScroll(1000);

    $('.handle').on('click', function(){
        //document.body.style.backgroundColor = '#000000';
        $('#navbar ul').toggleClass('show');
        $('#navbar-menu svg').toggleClass('show');
    });

    $("img").unveil(1000);

    $('[class^="advice"]').click(function(el){
        if ($(el).css("height") == '100%') {
            shrinkDiv($(el));
        } else if ($(el).css("height") < '100%') {
            expandDiv($(el));
        }
    });


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


function shrinkDiv (divElement) {
    divElement.animate({height: '35px'});
    divToggle = true;
}

function expandDiv (divElement) {
    divElement.animate({height: '100%'});
    divElement.style.backgroundColor = 'blue';
    divToggle = false;
}