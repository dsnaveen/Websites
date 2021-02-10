/* 
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
MATRIX TUTORIAL MENU FUNCTIONS.  This set of functions manages the 
navigation menu for the Stat Trek matrix tutorial. 
1.  This menus displays main topics at the top level. When the user clicks
a main topic, the web page for that topic is displayed.
2.  A red arrow on the menu indicates the current page being displayed.

Notes: 
1.  The functions and global variables all begin with "mat_" to prevent name
collisions with other scripts.
2.  These functions rely on CSS classes defined in matrixToc.css, which also begin 
with "mat_".
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

//''''''''''''''''''''''''''''''''''''''''''''''''''''''
//Identify current page on matrix table of contents
//''''''''''''''''''''''''''''''''''''''''''''''''''''''
//Hide arrows on matrix TOC
function mat_hideMatrixTocArrows() {
    //Declare and initialize array of span elements
    var SpanElements = document.getElementsByTagName("span");

    //Hide all span elements within a list element
    for (var i = 0; i < SpanElements.length; i++) {
        if (SpanElements.item(i).className == "mat_TocArrow") {
            SpanElements.item(i).style.color = "#fff";
        }
    }
}

//Show arrow on matrix TOC for current page
function mat_showMatrixTocArrow() {
    //Hide all arrows on matrix TOC
    mat_hideMatrixTocArrows();

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/matrix.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp1").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/matrix-type.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp2").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/matrix-addition.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp3").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/matrix-multiplication.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp4").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/vector-multiplication.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp5").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/elementary-operations.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp6").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/echelon-form.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp7").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/echelon-transform.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp8").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/independent-vector.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp9").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/matrix-rank.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp10").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/matrix-determinant.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp11").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/matrix-inverse.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp12").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/find-matrix-inverse.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp13").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/how-to-find-inverse.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp14").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/system-of-equations.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp15").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/sum-of-elements.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp16").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/vector-mean.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp17").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/deviation-score.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp18").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/sums-of-squares.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp19").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/covariance-matrix.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp20").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/matrix-theorems.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp21").style.color = "#900";
    }

    //Display arrow for span element corresponding to current page
    //Note: To include a slash (/)in a regular expression, escape it with a backslash(\).
    var tomatch = /\/matrix-notation.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(docUrl.toLocaleLowerCase())) {
        document.getElementById("sp22").style.color = "#900";
    }
}