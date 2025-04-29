// JQuery Script for Kay's Cakes
// Original Author: Evan Matheson

$(document).ready(function () {
    // Toggle nav in smaller screens
    $('.menu-toggle').click(function () {
        $('.nav-links').slideToggle(200);
        $(this).toggleClass('active');

        // Change icon depending on state
        $(this).html($(this).hasClass('active') ? '&#10005;' : '&#9776;');
    });

    // Close nav on link click (mobile only)
    $('.nav-links a').click(function () {
        if ($(window).width() <= 768) {
            $('.nav-links').slideUp(200);
            $('.menu-toggle').removeClass('active').html("&#9776;");
        }
    });

    // Reset styles when resizing to large screen
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.nav-links').removeAttr('style');
            $('.menu-toggle').removeClass('active').html("&#9776;");
        }
    });

    // $("#toggle-form").text('⇴ Click here to open the form');
    // Toggle form section
    $('#toggle-form').click(function () {
        console.log("toggle form's visibility");
        $('#form').slideToggle(500);
        $('#toggle-form').text($('#form').is(':hidden') ? '⇴ Click here to open the form' : '⇞ Click to hide the form');
        console.log("form visibility is done")
    });
});
