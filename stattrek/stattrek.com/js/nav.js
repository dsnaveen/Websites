/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Nav.js defines the behavior of the header navigation, using the Amazon 
tab style recommended by Steve Krug on p. 81 of "Don't Make Me Think". 

Notes: 
1.  The functions and global variables all begin with "nav_" to prevent name
collisions with other scripts.
2.  These functions rely on CSS classes defined in nav.css, which also begin 
with "nav_".
3.  Some of these functions were adapted from Quirksmode.org:
http://www.quirksmode.org/book/examplescripts/dropdown/dropdown.js .

The navigation has the following attributes:
1.  For users without javascript,
a.  By default, top-level navigation is set to Inactive style.
b.  By default, sub-navigation is visible.  
c.  Hence, the menu is accessible to Users without javascript.  
2.  For users with javascript, 
a.  Sub-navigation is visible only for the active top-level tab, unless the
user hovers over an inactive, top-level tab.
b.  When user hovers over an inactive, top-level tab, the active 
sub-navigation row is hidden (i.e., display is set to "none"); and the 
appropriate hover sub-navigation row is shown (i.e., display is set to "block").
c.  If the current web page appears as a link in the navigation, the sub-navigation
in which it appears is visible and link is highlighted.
d.  If the current web page does not appear as a link in the navigation, all 
of the top-level tabs are light blue and the sub-navigation is light blue.
e.  The top-level tabs are anchor elements, which link to a page in the 
sub-navigation row.  Thus, when top-level tab anchors are clicked, the browser
displays a new web page.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/

/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
PSEUDO-CODE: INITIALIZE NAVIGATION STYLE
1.  Identify nav_docUrl, the URL from which current web page was loaded.
2.  Set nav_ActiveTabNumber, based on nav_docUrl. If the web page is NOT part of the user 
control navigation, nav_ActiveTabNumber = 0. 
3.  Set nav_ActiveTabID, based on nav_ActiveTabNumber. 
4.  Set style of active tab to reflect its active status, based on nav_ActiveTabID.
5.  Set style of active subnavigation(including visibility), based on nav_ActiveTabNumber.

PSEUDO-CODE: UPDATE NAVIGATION STYLE, BASED ON HOVER BEHAVIOR
1.  Set HoverTabNumber, based on tab receiving hover onfocus or onmouseover events.
2.  Set HoverTabID, based on HoverTabNumber. 
3.  Set style of hover tab, based on HoverTabID.
4.  Set style of hover subnavigation (including visibility), based on onfocus or
onmouseoover events.   In other words, hide the active sub-navigation and display the 
hover sub-navigation.
5.  Set style of hover sub-navigation (including visibility), based on onblur or
onmouseout events.   In other words, show the active sub-navigation and hide the 
hover sub-navigation.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/

/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
DECLARE GLOBAL VARIABLES
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/
var nav_docUrl = document.URL.toLocaleLowerCase();  //The Url from which the document was loaded.
var nav_ActiveTabNumber = nav_getActiveTabNumber();     //Identify active tab for open web page.

/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
CALL FUNCTIONS WHEN WINDOW LOADS 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/
//Initialize scripts for the navigation menu when the window loads. Note
//that this window.onload event does NOT overwrite any other window.onload
//events that might be declared in other javascript scripts.
//Source: ppk, pp. 125-126.
//WARNING:  The addEventSimple functions seem to be executed in reverse order. Thus,
//the last function listed below is executed first, and the first function is
//executed last!!

//ut_addEventSimple(window, "load", nav_initializeNavigation);

/*
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
NAVIGATION-SPECIFIC UTILITIES
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/
function nav_initializeNavigation() {
    //Hide sub-navigation
    //nav_hideSubNavigation();

    //Set the initial style for the top-level navigation
    nav_setTopLevelNavigationStyle(nav_ActiveTabNumber);

    //Set the initial style for the sub-navigation menu.
    nav_showSubNavigation(nav_ActiveTabNumber);

    //Register event handlers
    //nav_registerEventHandlers();
}

/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
IDENTIFY ACTIVE TAB NUMBER 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/
//Get the top-level navigation tab number for the web page that is currently open.
//Assign that number to nav_ActiveTabNumber.
//Note: The regular expression test method is described in Osborne, p. 524.
function nav_getActiveTabNumber() {
    //If the active page does not appear in the header navigation, nav_ActiveTabNumber = 0
    nav_ActiveTabNumber = 0;

    //If the home page is active, nav_ActiveTabNumber = 1
    var tomatch = /default.aspx/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(nav_docUrl.toLocaleLowerCase())) { nav_ActiveTabNumber = 1; }

    var tomatch = /localhost/;   //This is a regular expression (Osborne, 524)
    if (tomatch.test(nav_docUrl.toLocaleLowerCase()) && nav_docUrl.length < 24) { nav_ActiveTabNumber = 1; }

    if (nav_docUrl.substring(nav_docUrl.length - 4, nav_docUrl.length) == "str/")
    { nav_ActiveTabNumber = 1; }
    if (nav_docUrl.substring(nav_docUrl.length - 3, nav_docUrl.length) == "str")
    { nav_ActiveTabNumber = 1; }

    if (nav_docUrl.substring(nav_docUrl.length - 4, nav_docUrl.length) == "sto/")
    { nav_ActiveTabNumber = 1; }
    if (nav_docUrl.substring(nav_docUrl.length - 3, nav_docUrl.length) == "sto")
    { nav_ActiveTabNumber = 1; }

    if (nav_docUrl.substring(nav_docUrl.length - 13, nav_docUrl.length) == "stattrek.com/")
    { nav_ActiveTabNumber = 1; }
    if (nav_docUrl.substring(nav_docUrl.length - 12, nav_docUrl.length) == "stattrek.com")
    { nav_ActiveTabNumber = 1; }

    if (nav_docUrl.substring(nav_docUrl.length - 13, nav_docUrl.length) == "stattrek.org/")
    { nav_ActiveTabNumber = 1; }
    if (nav_docUrl.substring(nav_docUrl.length - 12, nav_docUrl.length) == "stattrek.org")
    { nav_ActiveTabNumber = 1; }

    if (nav_docUrl == "http://stattrek.com".toLowerCase())
    { nav_ActiveTabNumber = 1; }
    if (nav_docUrl == "http://www.stattrek.com".toLowerCase())
    { nav_ActiveTabNumber = 1; }
    if (nav_docUrl == "http://stattrek.com/".toLowerCase())
    { nav_ActiveTabNumber = 1; }
    if (nav_docUrl == "http://www.stattrek.com/".toLowerCase())
    { nav_ActiveTabNumber = 1; }

    //If the AP video is active or if one of the tutorial pages is active, 
    //nav_ActiveTabNumber = 2.
    //Note: To include a slash in a regular expression, escape it with a backslash.
    tomatch = /\/video-tutorials/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/chi-square-test/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/distributions/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/estimation/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/experiments/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/hypothesis-test/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/matrix-algebra/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/probability/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/regression/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/sample-size/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/sampling/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/statistics\/what-is-statistics/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/statistics\/data-collection-methods/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/statistics\/measurement-scales/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/statistics\/formulas/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/statistics\/charts/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/statistics\/descriptive-statistics/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/statistics\/distributions/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/survey-research/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/tutorials/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/video-tutorials/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /\/videos\/ap-statistics/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /tutorial=ap/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }
    tomatch = /tutorial=stat/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 2; }

    //If the page is in the ap-statistics folder or if it displays an AP practice exam, 
    //nav_ActiveTabNumber = 3.
    //Note: To include a slash in a regular expression, escape it with a backslash.
    tomatch = /\/ap-statistics\/calculator-comparison/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 3; }
    tomatch = /\/ap-statistics\/faq/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 3; }
    tomatch = /\/ap-statistics\/formulas/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 3; }
    tomatch = /\/ap-statistics\/practice-test/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 3; }
    tomatch = /\/ap-statistics\/study-guide/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 3; }
    tomatch = /\/ap-statistics\/test-preparation/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 3; }
    

    //If the page is in the online-calculator folder, nav_ActiveTabNumber = 4 - at 
    //least initially. The active tab number is redefined in the next 
    //section for online-calculators that should appear under the Stat Tools tab.
    //Note: To include a slash in a regular expression, escape it with a backslash.
    tomatch = /\/online-calculator/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 4; }

    //If the page is in the tools folder or if it displays the random
    //number generator or if it is in the spwizard folder, nav_ActiveTabNumber = 5.
    //Note: To include a slash in a regular expression, escape it with a backslash.
    tomatch = /\/online-calculator\/probability-calculator/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 5; }
    tomatch = /\/online-calculator\/bayes-rule-calculator/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 5; }
    tomatch = /\/online-calculator\/combinations-permutations.aspx/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 5; }
    tomatch = /\/online-calculator\/event-counter/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 5; }
    tomatch = /\/online-calculator\/factorial/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 5; }
    tomatch = /\/online-calculator\/random-number-generator/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 5; }
    tomatch = /\/sample-planning-wizard/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 5; }
    tomatch = /\/random-number-generator.aspx/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 5; }

    //If the page is a hand-held calculator, nav_ActiveTabNumber = 6.
    //Note: To include a slash in a regular expression, escape it with a backslash.
    tomatch = /\/calculator/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 6; }

    //If the page is in the books folder, nav_ActiveTabNumber = 7.
    //Note: To include a slash in a regular expression, escape it with a backslash.
    //tomatch = /\/studyguide.aspx/;
    //if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 7; }
    tomatch = /\/books\//;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 7; }

    //If the page is in the Help menu, nav_ActiveTabNumber = 8.
    //Note: To include a slash in a regular expression, escape it with a backslash.
    tomatch = /\/statistics\/dictionary.aspx/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 8; }
    tomatch = /\/practice-test.aspx/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 8; }
    tomatch = /\/problems.aspx/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 8; }
    tomatch = /\/formulas.aspx/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 8; }
    tomatch = /\/notation.aspx/;
    if (tomatch.test(nav_docUrl)) { nav_ActiveTabNumber = 8; }

    //Return active tab number.
    return nav_ActiveTabNumber;
}

/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
HIDE SUB-NAVIGATION 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/
//Hide the sub-navigation
function nav_hideSubNavigation() {
    //Get list of div elements
    var DivList = document.getElementsByTagName("div");

    //Identify all div elements used in the sub-navigation (i.e., all div
    //elements having a class equal to "nav_bottom").
    tomatch = /nav_bottom/;
    for (i = 0; i < DivList.length; i++) {
        try {
            //Get class name
            var DivClass = DivList[i].className.toLowerCase();

            //Find div elements with ID containing "divSubNav"
            if (tomatch.test(DivClass)) {
                //Hide div elements with ID containing "divSubNav"
                DivList[i].style.display = 'none';
            }
        }
        catch (ex) { alert("Error in nav_hideSubNavigation function"); }
    }
}

/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
SET STYLE FOR TOP-LEVEL NAVIGATION
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/
//Initialize presentation style for top-level navigation
function nav_setTopLevelNavigationStyle(TabNumber) {

    //Get list of all anchor elements
    var AnchorList = document.getElementsByTagName("a");

    //Set value of the current top-level tab whose style is defined by
    //this function in the "for" loop below.  (The first tab has a CurrTab 
    //value equal to 1; the second, equal to 2; etc.)
    var CurrTab = 0;

    //Set style for all anchor elements used in the top-navigation. (The anchor
    //elements in top-level navigation have a class equal to "nav_top_inactive" 
    //or "nav_top_active".)
    tomatch1 = /nav_top_inactive/;
    tomatch2 = /nav_top_active/;
    for (i = 0; i < AnchorList.length; i++) {
        try {
            //Get class name of an anchor used on the web page
            var Anchor = AnchorList[i].className.toLowerCase();

            //If the anchor is used in top-level navigation, set its style
            if (tomatch1.test(Anchor) || tomatch2.test(Anchor)) {
                //Identify current top-level tab
                CurrTab = CurrTab + 1;
                
                 //Make all top-level anchor elements inactive
                AnchorList[i].className = 'nav_top_inactive';

                //Set the style for the active top-level anchor
                if (TabNumber == CurrTab) {
                    AnchorList[i].className = 'nav_top_active'
                } 
            }
        }
        catch (ex) { alert("Error in nav_setTopLevelNavigationStyle function"); }
    }
}

/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
DISPLAY SUBNAVIGATION
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/
function nav_showSubNavigation(tabNumber) {

    //Hide all of the sub-navigation Div elements
    nav_hideSubNavigation();

    //Display the sub-navigation indicated by tabNumber
    var DivID = "divSubNav" + tabNumber;
    if (DivID == "divSubNav0") { DivID = "divSubNav1" }
    document.getElementById(DivID).style.display = 'block';

    //Highlight current tab
    nav_setTopLevelNavigationStyle(tabNumber);

    //Highlight current active anchor
    nav_highlightActivePage();
}

/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
HIGHLIGHT CURRENT PAGE IN SUBNAVIGATION
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/
//Set the color for all anchors in the sub-navigation.
function nav_setSubmenuAnchorColor(newColor) {
    //Get the submenu div element
    var DivSubMenu = document.getElementById("divSubNav2");

    //Get list of all anchors in the submenu
    var AllAnchorsList = DivSubMenu.getElementsByTagName('a');

    //Set the color for all anchors in the submenu
    for (var I = 0; I < AllAnchorsList.length; I++) {
        var ThisAnchor = AllAnchorsList(I);
        ThisAnchor.style.color = newColor;
    }
}

//If it is part of the menu, highlight the current active page.
function nav_highlightActivePage() {
    //Set the color for all anchors in the sub-navigation to white.
    nav_setSubmenuAnchorColor("#fff");

    //If it has a link in the Tutorials tab, assign the "nav_aSubNavActive" class style
    //to the current active page.
    tomatch = /tutorials\/free-online-courses.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("aTutorialOverview");
        Anc.style.color = "#ecb01f";
    }

    tomatch = /ap-statistics\/course-overview.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("aAPVideo");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /lesson1\/intro.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("aTutorialOverview");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /lesson1\/statistics-intro.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("aStatisticsIntro");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /ap-statistics-1\/ap-statistics-intro.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("aAPStatisticsIntro");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /matrix-algebra\/matrix-algebra-tutorial.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("aMatrixAlgebra");
        Anc.className = "nav_aSubNavActive";
    }

    //If it has a link in the AP Statistics tab, assign the "aSubNavActive" class style 
    //to the current active page.    
    tomatch = /ap\/overview.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("APOverview");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /ap-statistics-4\/ap-statistics-practice-exam-1.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("APPracticeExam");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /ap\/faq.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("APFaq");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /ap\/studyguide.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("APGuides");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /ap\/calculator.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("APCalculators");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /ap-statistics-1\/ap-formulas.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("APFormulas");
        Anc.className = "nav_aSubNavActive";
    }

    //If it has a link in the Stat Tables tab, assign the "aSubNavActive" class style 
    //to the current active page.    
    tomatch = /tables\/binomial.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Binomial");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tables\/chisquare.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("ChiSquare");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tables\/f.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("F");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tables\/hypergeometric.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Hypergeometric");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tables\/multinomial.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Multinomial");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tables\/negbinomial.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("NegativeBinomial");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tables\/normal.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Normal");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tables\/poisson.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Poisson");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tables\/t.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("T");
        Anc.className = "nav_aSubNavActive";
    }

    //If it has a link in the Stat Tools tab, assign the "aSubNavActive" class style 
    //to the current active page.
    tomatch = /spwizard\/sampleplanningwizard.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Wizard");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tables\/random.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Random");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tools\/bayesrulecalculator.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Bayes");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tools\/probabilitycalculator.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("ProbCalculator");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /tools\/eventcounter.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("EventCounter");
        Anc.className = "nav_aSubNavActive";
    }

    //If it has a link in the Calculators tab, assign the "aSubNavActive" class style
    //to the current active page.

    tomatch = /ap\/calculator.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("ApStatisticsCalculators");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /calc\/graphing-calculators.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("HandheldCalculators");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /calc\/scientific-calculators.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Scientific");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /calc\/financial-calculators.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Financial");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /reading\/calculator-books.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc1 = document.getElementById("CalculatorBooks");
        Anc1.className = "nav_aSubNavActive";
    }

    //If it has a link in the Books tab, assign the "aSubNavActive" class style
    //to the current active page.

    tomatch = /reading\/statistics.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("ReadingStatistics");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /reading\/probability.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("ReadingProbability");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /reading\/sampling.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("ReadingSurveySampling");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /reading\/ap.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("ReadingAPGuides");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /reading\/excel.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("ReadingExcel");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /reading\/calculator-books.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("ReadingCalculators");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /reading\/books.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("ReadingReviews");
        Anc.className = "nav_aSubNavActive";
    }

    //If it has a link in the Books tab, assign the "aSubNavActive" class style
    //to the current active page.

    tomatch = /help\/glossary.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Glossary");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /ap-statistics-4\/ap-statistics-practice-exam-1.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("HelpPracticeExam1");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /statistics-problems\/statistics-problems.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Problems");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /lesson1\/formulas.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Formulas");
        Anc.className = "nav_aSubNavActive";
    }

    tomatch = /lesson1\/notation.aspx/;
    if (tomatch.test(nav_docUrl)) {
        var Anc = document.getElementById("Notation");
        Anc.className = "nav_aSubNavActive";
    }

}

/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
REGISTER EVENT HANDLERS
NOTE:  The traditional model for registering event handlers is described at ppk, p. 301.
WARNING:  Apparently, this method does not allow you to pass parameters to the function
being registered; the function does not work!
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/
function nav_registerEventHandlers() {
    //Register events for top-level list items
    var ListItems = document.getElementsByTagName("li");
    var TabNum = 0;
    var tomatch = /nav_topmenuitem/;

    for (i = 0; i < ListItems.length; i++) {
        try {
            //Get class name
            var LiClassName = ListItems[i].className.toLowerCase();

            //Find li elements with class equal to "nav_topmenuitem"
            if (tomatch.test(LiClassName)) {
                //Update tab numbers
                TabNum = TabNum + 1;

                //Register events for top-level list items.
                //Note: Cannot use parenthese in the functions, so this DOES NOT WORK!
                ListItems[i].onmouseover = nav_showSubNavigation(TabNum);
                ListItems[i].onmouseoout = nav_showSubNavigation(nav_ActiveTabNumber);
            }
        }
        catch (ex) { alert("Error in nav_registerEventHandlers function: Register events for top-level list items"); }
    }
}

