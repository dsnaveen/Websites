/* 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
JAVASCRIPT VARIABLES AND FUNCTIONS.
These variables and functions are global.  They perform common tasks in javascript.

Notes: 
1.  The functions and global variables all begin with "ut_" to prevent name
collisions with other scripts.
2.  Functions and variables that do not use the "ut_" prefix are deprecated.  
They are only retained to accommodate older programming.  Always use the versions 
that begin with "ut_" rather than versions that do not.
3.  Some of these functions are based ideas presented in ppk's book and 
at Quirksmode.org.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

/*'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Declare global variables
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/
//Example of object detection (see ppk p. 78-80). This particular test is an
//effective check for W3C DOM support.
var W3CDOM = (document.getElementsByTagName && document.createElement);
var ut_W3CDOM = W3CDOM;

//Define the full Url; i.e., the web address that identifies the current web page.
//  NOTE: ut_fullUrl returns a string in the following forms:
//  http://localhost:54690/str/ap-statistics-1/ap-statistics-intro.aspx?tutorial=ap
//  http://www.stattrek.com/ap-statistics-1/ap-statistics-intro.aspx?tutorial=ap
var ut_fullUrl = document.URL.toLocaleLowerCase();
var docUrl = ut_fullUrl;  //The Url from which the document was loaded.

//Define the pathname portion of the URL. For example, the pathname for
//  http://www.java2s.com/pictures/index.htm is "/pictures/index.htm".
//  NOTE: ut_pathname includes the web address path and the page filename; but it
//  does NOT include query strings. 
var ut_pathname = document.location.pathname.toLowerCase();

/*'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Math functions
NOTES:
1.  Functions that do not have the "ut_" prefix are deprecated.  They are only 
used by older programming.  Always use the version that begins with "ut_" in
preference to the older functions and old variables.

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/
function ut_IsNumeric(StrInput) {
    // This function determines whether a string input (StrInput) is a number.
    // If StrInput is a number, the function returns True; otherwise,
    // it returns False.

    //Convert string to number (Source: Flanagan, p. 30)
    var Number = parseFloat(StrInput);

    //Return value
    if (isNaN(Number)) { return false; }

    //Make sure Number has characters 
    if (Number.toString.length <= 0) { return false; }

    return true;
}

function IsNumeric(StrInput) { return ut_IsNumeric(StrInput); }

function IsInteger(StrInput) {
    // This function determines whether a string input (StrInput) is an integer.
    // If StrInput is an integer, the function returns True; otherwise, 
    // it returns False.

    //Make sure StrInput is a number (Source: Flanagan, p. 30)
    var Number = StrInput;
    if (!IsNumeric(Number)) { return false; }

    //Make sure StrInput is an integer (Source: Flanagan, p. 64)
    if (Number % 1 == 0) { return true; }
    return false;
}

function ut_IsInteger(StrInput) { return IsInteger(StrInput); }

/*'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Enhanced "DOM" functions
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/

//Modern browsers have already implemented the getElementsByClassName() method. Except, 
//of course , IE, for which we can use this kind of approach.
//Source: Adapted from function described at: 
//http://forums.devshed.com/javascript-development-115/javascript-get-all-elements-of-class-abc-24349.html
function ut_getElementsByClassName(tagName, className) {
    var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
    var allElements = document.getElementsByTagName(tagName);
    var results = [];

    var element;
    for (var i = 0; (element = allElements[i]) != null; i++) {
        var elementClass = element.className;
        if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
            results.push(element);
    }
    return results;
}

/* ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
EVENT-REGISTRATION FUNCTIONS.  This set of functions tells the browser which function to run
when an event (e.g., onclick or onchange) takes place.  They facilitate separation of structure
and behavior.  And they try to handle some browser inconsistencies between the W3C and Microsoft 
models.  However, they also have disadvantages, compared to other ways to register an event 
handler.  Read pp. 300-310 for a discussion of pros and cons associated with these functions.

Example: Suppose you want to run the "initNavigation" function when the "load" event of the 
window object is called.  You could use the following statement to do this:
ut_addEventSimple(window, "load", initNavigation);
    
Source: Adapted from ppk's book (pp. 307-308) and Quirksmode.org.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */
function ut_addEventSimple(obj, evt, fn) {
    if (obj.addEventListener)
        obj.addEventListener(evt, fn, false);
    else if (obj.attachEvent)
        obj.attachEvent('on' + evt, fn);
}

function ut_removeEventSimple(obj, evt, fn) {
    if (obj.removeEventListener)
        obj.removeEventListener(evt, fn, false);
    else if (obj.detachEvent)
        obj.detachEvent('on' + evt, fn);
}

/* ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
BROWSER INCOMPATIBILITY FUNCTIONS.  This set of functions addresses browser incompatibility
problems.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */

//Provide PUSH and SHIFT functionality for IE5 (Source: ppk's book and Quirksmode.org).
function ut_Array_push() {
    var A_p = 0;
    for (A_p = 0; A_p < arguments.length; A_p++) {
        this[this.length] = arguments[A_p];
    }
    return this.length;
}

if (typeof Array.prototype.push == "undefined") {
    Array.prototype.push = ut_Array_push;
}

function ut_Array_shift() {
    var A_s = 0;
    var response = this[0];
    for (A_s = 0; A_s < this.length - 1; A_s++) {
        this[A_s] = this[A_s + 1];
    }
    this.length--;
    return response;
}

if (typeof Array.prototype.shift == "undefined") {
    Array.prototype.shift = ut_Array_shift;
}

//Modern browsers have already implemented the getElementsByClassName() method. Except, 
//of course , some versions of IE, for which we can use this kind of approach.
//Source: http://forums.devshed.com/javascript-development-115/javascript-get-all-elements-of-class-abc-24349.html
function ut_defineElementsByClassName() {
    if (document.getElementsByClassName == undefined) {
        document.getElementsByClassName = function (className) {
            var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
            var allElements = document.getElementsByTagName("*");
            var results = [];

            var element;
            for (var i = 0; (element = allElements[i]) != null; i++) {
                var elementClass = element.className;
                if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
                    results.push(element);
            }

            return results;
        }
    }
}

if (document.getElementsByClassName == undefined) { ut_defineElementsByClassName(); }

/* ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
FILE MANAGEMENT FUNCTIONS.  This set of functions performs tasks associated with file mgt.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */
//This function identifies the directory in which the current web page resides.  If the
//page is in the root directory, the function returns 1; in the first subdirectory, 2; in
//the second subdirectory, 3; etc.  If the function cannot identify a subdirectory, it
//returns 0.
//It relies on ut_fullUrl, a string which identifies the web address and takes the 
//following forms:
//  http://localhost:54690/str/ap-statistics-1/ap-statistics-intro.aspx?tutorial=ap
//  http://www.stattrek.com/ap-statistics-1/ap-statistics-intro.aspx?tutorial=ap
//The function counts the number of forward slashes in the string to identify the directory.
function ut_getFileLevel() {
    //Declare variables
    var numSlashes = 0;

    //Count forward slashes. (Do not count the last character in the ut_fullUrl string,
    //since the web address should not end with a slash, unless the file is the start
    //page in the root directory.)
    for (var i = 0; i < ut_fullUrl.length - 2; i++) {
        if (ut_fullUrl.substr(i, 1) == "/") {
            numSlashes = numSlashes + 1;
        }
    }

    if (numSlashes < 2) return 0;
    if (numSlashes == 2 || numSlashes == 3) return 1;
    if (numSlashes > 3) return numSlashes - 3;

    return 0;
}