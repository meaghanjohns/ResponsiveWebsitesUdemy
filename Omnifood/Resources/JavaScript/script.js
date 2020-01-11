$(document).ready(function () {
    
/* The following code creates a "sticky navigation" using the Waypoints jQuery plug-in.

/* When the user scrolls down on the page and almost reaches the Features section, a new class is added to the header navigation and enables the custom CSS for that class.

/* When the user scrolls up the page and passes the Features section, the class is removed and the custom CSS disappears.  */

    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('header nav').addClass('sticky-nav animated slideInDown')
        } else {
            $('header nav').removeClass('sticky-nav')
        }
    }, {
        offset: '60px'
    });

/* The following code triggers animations on scroll. */

    $('.js-waypoint-1').waypoint(function(direction) {
        $('.js-waypoint-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js-waypoint-2').waypoint(function (direction) {
        $('.js-waypoint-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js-waypoint-3').waypoint(function (direction) {
        $('.js-waypoint-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });    

    $('.js-waypoint-4').waypoint(function (direction) {
        $('.js-waypoint-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });      
    
/* The following code enables responsive mobile navigation, creating an open & close effect when the navigation icon is selected. */

    $('.js-mobile-nav-icon').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-mobile-nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round')            
        }
    });

/* The following code creates a scrolling effect in jQuery. This can actually be removed entirely just by using the "scroll-behavior: smooth;" feature in CSS, which is why the jQuery code from the course is commented out and CSS is used instead.

Note that "scroll-behaviour: smooth" seems to be faster than the jQuery code below.

    $('.js-scroll-signup').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-signup').offset().top}, 1000);
    });
    $('.js-scroll-features').click(function() {
        $('html, body').animate({ scrollTop: $('.js-section-features').offset().top}, 1000);
    });
    $('.js-scroll-steps').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-steps').offset().top}, 1000);
    });
    $('.js-scroll-cities').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-cities').offset().top}, 1000);
    });
    
    */
    
});

