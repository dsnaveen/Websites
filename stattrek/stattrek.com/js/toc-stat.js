/* 
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
STATISTICS TUTORIAL MENU FUNCTIONS.  This set of functions manages the 
navigation menus for the AP Statistics tutorial and for the Probability and 
Statistics tutorial. 
1.  These menus display main topics at the top level. When the user clicks
a main topic, sub-topics slide down from the main topic.
2.  The topics and sub-topics serve as a table of contents for both tutorials. 
3.  When a sub-topic is visible, the red arrow in front of the main topic points 
down; when the sub-topic is hidden, the red arrow points to the right.
4.  When the sub-topic is visible for the web page that is currently open, a 
gray background appears over the sub-topic menu item that refers to the 
currently open web page.
4.  By noting which menu item has a gray background, students can easily monitor 
their progress through the tutorial.

Notes: 
1.  The functions and global variables all begin with "st_" to prevent name
collisions with other scripts.
2.  These functions rely on CSS classes defined in statToc.css, which also begin 
with "st_".
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

//Initialize page
//ut_addEventSimple(window, "load", st_init);

function st_init() {
    //Hide all submenus
    st_hideSubmenus();

    //Show submenu for current active page
    st_showCurrentSubmenu();
}

//Hide submenus
function st_hideSubmenus() {
    var submenu = document.getElementsByTagName('div');
    for (var i = 0; i < submenu.length; i++) {
        if (submenu[i].className != 'st_submenu') continue;
        submenu[i].style.display = "none";
    }
}

//Toggle top arrow, which appears in span element of top menu
function st_toggleTopArrow(topArrowSpanNode) {
    //Declare top arrow span element
    var topArrowSpanElement = topArrowSpanNode;

    //Toggle top arrow
    if (topArrowSpanElement.className == "st_toparrow") {
        //Show down arrow
        topArrowSpanElement.className = "st_downarrow";
        topArrowSpanElement.innerHTML = "&#9662;";
    }
    else {
        //Show right-pointing arrow
        topArrowSpanElement.className = "st_toparrow";
        topArrowSpanElement.innerHTML = "&#9656;";
    }
}

//Show submenu for the current active web page. 
//If successful, returns true; if not, returns false.
function st_showCurrentSubmenu() {

    //Get list of elements from the AP stat tutorial menu. 
    //  NOTE: If AP tutorial is not active, divMenu will be null.
    var divMenu = document.getElementById("divAPMenuItems");

    //If AP tutorial is not active, get list of elements from the General stat tutorial menu.
    if (divMenu == null) { divMenu = document.getElementById("divStatMenuItems"); }

    //Get list of anchors from the active tutorial menu.
    var anchorlist = divMenu.getElementsByTagName('a');

    //Find the submenu that refers to the current web page.
    //The string.indexOf() function is explained at Flanagan, p.699 
    for (var i = 0; i <= anchorlist.length - 1; i++) {
        if (anchorlist[i].href.toLowerCase().indexOf(ut_pathname) >= 0 && anchorlist[i].className == "st_submenu") {
            //Highlight menu item background (the paragraph element, which is the parent 
            //of the anchor element) for the active page
            anchorlist[i].parentNode.style.backgroundColor = "#ddd";

            //Set style and behavior for the menu item that links to the active page
            anchorlist[i].className = "st_activepage";
            anchorlist[i].href = "#";

            //Find the parent of the top menu associated with this submenu
            var topMenuParent = anchorlist[i].parentNode.parentNode.parentNode;

            //Find the top menu associated with this submenu
            var divlist = topMenuParent.getElementsByTagName('div');
            for (var j = 0; j <= divlist.length - 1; j++) {
                if (divlist[j].className == "st_topmenu") {
                    //Get list of span elements in top menu
                    var spanlist = divlist[j].getElementsByTagName('span');

                    //Toggle arrow in span element
                    st_toggleTopArrow(spanlist[0]);
                }
            }

            //Display submenu (the grandparent of the anchor element)
            if (anchorlist[i].nodeType == 1 /*Node.ELEMENT_NODE*/) {
                anchorlist[i].parentNode.parentNode.style.display = "block";
                return true;
            }
        }
    }
    return false;
}

//Change the visibility of the submenu after the anchor element in its top menu is clicked.
function st_toggleSubmenuVisibility(anchorNode) {
    //Identify the top menu anchor element that was clicked
    var topMenuAnchor = anchorNode;

    //Identify the anchor parent, which is a top menu div element
    var anchorParent = topMenuAnchor.parentNode;

    //Get the list of spans in the top menu div element
    var spanList = anchorParent.getElementsByTagName('span');

    //Identify the top arrow from the list of arrows
    var topArrow = "";
    for (var j = 0; j <= spanList.length - 1; i++) {
        if (spanList[j].className == "st_toparrow" || spanList[j].className == "st_downarrow") {
            topArrow = spanList[j];
            break;
        }
    }

    //Toggle the arrow in the top arrow span element, the first element 
    //in topArrowList
    st_toggleTopArrow(topArrow);

    //Identify the submenu, which is a sibling of the top menu div element; that is, the
    //submenu is a sibling of the anchor parent. (Note: ppk recommends
    //against the previousSibling and nextSibling properties, so we didn't use them to
    //identify the submenu.  See p. 359 in ppk.)
    var submenuParent = anchorParent.parentNode;
    var divList = submenuParent.getElementsByTagName('div');
    if (divList.length < 1) return false;

    //Toggle submenu visibility 
    for (var i = 0; i <= divList.length - 1; i++) {
        if (divList[i].className == "st_submenu") {
            if (divList[i].style.display == "block") {
                divList[i].style.display = "none";
                break;
            }
            else {
                divList[i].style.display = "block";
                break;
            }
        }
    }
}