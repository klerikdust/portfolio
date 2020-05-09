window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

$(document).ready(function () {

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('close');
        var currentHtml = document.location.href.match(/[^\/]+$/)[0]
        if (currentHtml.startsWith('index')) {
            $('.outer-container-portfolio').toggleClass('expand');
        }
        if (currentHtml.startsWith('about')) {
            $('.outer-container-about').toggleClass('expand');
        }
        $('.outer-container').toggleClass('expand');
        $('.site-navigation').toggleClass('show');
        $('.site-header').toggleClass('no-shadow');
    });
});