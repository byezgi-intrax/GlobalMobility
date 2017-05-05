(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });



    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });



    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    function thankYou() {
        var url = window.location.href;
        // Get DIV
        var msg = document.getElementById('confirmed');
        //var form = document.getElementById('mktoForm_4686');
        // Check if URL contains the keyword
        if( url.search('confirmed') > 0 ) {
        // Display the message
           msg.style.display = "block";
           //form.style.display = "none !important";
           $("body").scrollTop($("#contact").position().top);
        }
        else {
            MktoForms2.loadForm("//app-abk.marketo.com", "342-VXF-330", 4686);
        }
    }
    thankYou();

})(jQuery); // End of use strict
