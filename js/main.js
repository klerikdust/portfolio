$(document).ready(function () {
    
    
    //  Adapt navbar when reaching specific offset.
    $(window).scroll(function () {
        var offset = $(window).scrollTop();
        var transpaNavbar = offset >= ($(window).height() / 5);
        $('.navbar').toggleClass('block', transpaNavbar);
        $('.nav-link').toggleClass('block', transpaNavbar);
        $('.navbar-brand').toggleClass('block', transpaNavbar);
    });


    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 1000
    });




    // Add smooth scrolling on all links inside the navbar
    $(".nav-link, .navbar-brand").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})