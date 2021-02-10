/* 
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
jQuery script for video functions
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

//Display video, after the video command button is clicked, using the jquery 1.3  
//javascript library
//Source: McFarland jQuery book, pp. 245-249
function jqVideo_displayVideo() {
    $('.iframe').fancybox({
        width: 800,
        height: 800,
        fitToView : false,
        autoSize : false,
        overlayOpacity: .8,
        overlayColor: '#666',
        //padding: 0,
        //transitionIn: 'elastic',
        transitionOut: 'elastic',
        //easingIn: 'easeInSine',
        easingOut: 'easeOutSine'
    });  // end fancybox
}

//Display video, after the video command button is clicked, using the jquery 2.2 
//javascript library
//Source: McFarland jQuery book, pp. 245-249
function jqVideo_displayVideo_22() {
    $('.fancybox').fancybox({
        //source: fancyapps.com/fancybox/#instructions
        openEffect: 'elastic',
        closeEffect: 'elastic',
        autoCenter: 'true',
        scrolling: 'no',

        helpers:
        {
            overlay:
            {
                css: { 'background': 'rgba(52, 105, 232, 0.5)' },  //blue
                css: { 'background': 'rgba(232, 52, 105, 0.5)' },  //pink
                css: { 'background': 'rgba(105, 232, 52, 0.5)' },  //green
                css: { 'background': 'rgba(58, 42, 45, 0.95)' },  //light gray film
                css: { 'background': 'rgba(0, 0, 0, 0.5)' },  //gray
            }
        }
    });  // end fancybox
}

//Control rollover images for video command button. 
//Source: McFarland jQuery book, pp. 210-211
function jqVideo_buttonRollover() {
    $('#imgViewVideo').hover(
        function () {
            $(this).attr('src', "/images/videoButtonDarkBlue.gif");
        },
        function () {
            $(this).attr('src', "/images/videoButtonBlue.gif");
        }
    );  //end hover
    }

    //Display photo, after the video command button is clicked
    function jqVideo_displayPhoto() {
        $('#aViewPhoto').fancybox();  //Source: McFarland jQuery book, pp. 222-225
    }
