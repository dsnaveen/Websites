$( document ).ready(function() {
    // hide the text with "i" tag
    $("i").hide();
	
    // if a text with h1 tag is clicked, 
    // the next will be toggled
    $("h1").click(function() {
	$(this).next().slideToggle(100);
    });
});