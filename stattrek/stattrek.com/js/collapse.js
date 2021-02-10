/* 
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
JAVASCRIPT COLLAPSIBLE FUNCTIONS.
Collapsible content: This CSS works with /css/controls.css to produce collapsible buttons.
Reference: Javascript and jQuery, by McFarland, pp. 180-184;
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

function ToggleAnswer() {

    //Get the source element that called this function (typically an h2 element with a class
    //name of CollapsibleHeading).
    //Source: http://stackoverflow.com/questions/48239/getting-the-id-of-the-element-that-fired-an-event
    var source = event.target || event.srcElement;

    //Get the visibility of .CollapsibleAnswer class element (typically a div element) that follows the source element
    var IsVisible = "true";
    if ($(source).next('.CollapsibleAnswer').css('display') == 'none') {
        // element is hidden
        IsVisible = "false";
    }
    //alert("$(source).next('.CollapsibleAnswer').css('display') = " + $(source).next('.CollapsibleAnswer').css('display'));

    //Hide all answers
    $('.CollapsibleAnswer').hide()
    $('.CollapsibleHeading').removeClass('Close');  //Show open icon (plus sign) on all buttons

    //If the .CollapsibleAnswer class element that follows the source element was previously hidden,
    //show it (i.e., show the answer).
    if (IsVisible == "false") {
        $(source).next('.CollapsibleAnswer').fadeIn('normal');
        $(source).addClass('Close');    //Show close icon (minus sign) on the button that was clicked
    }   
}

function pageLoad() {
    //The pageLoad function is triggered for every async postback.
    //Source: http://forums.asp.net/t/1858556.aspx?update+panel+jquery+is+not+working

    //Hide all collapsible answers
    $('.CollapsibleAnswer').hide()
}