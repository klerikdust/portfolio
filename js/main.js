window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

$(document).ready(function () {
    $( '.menu' ).on( 'click', function() {
        const node = document.getElementsByClassName(`drawer`)[0]
        if (node.style.visibility === `hidden`) return node.style.visibility = `visible`
        return node.style.visibility = `hidden`
    });
});