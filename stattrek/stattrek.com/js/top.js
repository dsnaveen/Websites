/* 
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Script for the "top" button on mobile pages
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

$(document).ready(function () {

    //Initialize global variables
    TimeShowButton = new Date() - 5000;
    TimeScrollStops = new Date();

});

$(window).on("scrollstart", function () {

    //Get the vertical scroll position for the page 
    var scrollVal = $(window).scrollTop();

    //If conditions are favorable, display button
    if (((scrollVal > 320)) && ((TimeScrollStops - TimeShowButton) > 4100)) {
        //Update the time when the new "Top" button is displayed
        TimeShowButton = new Date();

        //Show button
        $('#divScrollTop').fadeIn(500);
        $('#divScrollTop').delay(3000);
    }
});

$(window).on("scrollstop", function () {

    //Get the time when the scroll stops
    var TimeScrollStops = new Date;

    //Get the vertical scroll position for the page 
    var scrollVal = $(window).scrollTop();

    if (((scrollVal > 320)) && ((TimeScrollStops - TimeShowButton) > 4100)) {
        //Update the time when the new "Top" button is displayed
        TimeShowButton = new Date();

        //Show button
        $('#divScrollTop').fadeIn(500);
        $('#divScrollTop').delay(3000);
    }

    //Fade button
    $('#divScrollTop').fadeOut(500);

    //Hide button if scrolling stops near the top of the page.
    //NOTE: This prevents button from overlaying ads that appear near top of page (i.e., divAd1).
    if (scrollVal <= 320) {
        $('#divScrollTop').hide();
    }

    //Get vertical position for "top" box
    //var offsets = $('#divScrollTop').offset();
    //var offsets = document.getElementById('divScrollTop').getBoundingClientRect();
    //var topBox = offsets.top;
    //var botBox = offsets.bottom;

    //Get vertical position for ad 2
    //var offsets = $('#divAd2').offset();
    //var offsets = document.getElementById('divAd2').getBoundingClientRect();
    //var topAd = offsets.top;
    //var botAd = offsets.bottom;

    //Hide button if it stops over ad 2
    //if ((topBox < topAd && topBox > botAd) || (botBox < topAd && botBox > botAd)) {
    //    $('#divScrollTop').hide();
    //}


});