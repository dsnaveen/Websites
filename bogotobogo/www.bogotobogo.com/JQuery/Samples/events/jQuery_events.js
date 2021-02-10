$( document ).ready(function() {
    $('h1').mouseenter(function(){
	$(this).css('backgroundColor', 'yellow');
    });
    $('h1').mouseleave(function(){
	$(this).css('backgroundColor', 'green');
        //$(this).unbind();
        $("*").unbind("mouseleave");
    });
});