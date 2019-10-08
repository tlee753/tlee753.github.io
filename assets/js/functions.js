$(document).ready(function() {

    //smoothScroll(1000);

    $('.handle').on('click', function(){
        $('#navbar ul').toggleClass('show');
        $('#navbar-menu svg').toggleClass('show');
    });

    $('[class^="advice"]').on('click', function(){
        var divHeight = $(this).height();
        if (divHeight > 35) {
            shrinkDiv($(this));
        } else {
            expandDiv($(this));
        }
    });

    $('.movie-container').on('click', function(){
        var divHeight = $(this).height();
        if (divHeight <= 300) {
            expandDiv($(this));
        } else {
            movieShrinkDiv($(this));
        }
    });

});

// smooth scrolling
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

// GT advice/explore pages
function shrinkDiv (divElement) {
    divElement.animate({height: '35px'});
}

function movieShrinkDiv (divElement) {
    divElement.animate({height: '300px'});
}

function expandDiv (divElement) {
    divElement.animate({height: '100%'});
}

// Carousel
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;

    // get slide array
    var x = document.getElementsByClassName("carousel");

    // wrap back around
    if (n > x.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    // this line errors
    // x[slideIndex-1].style.display = "block";
}