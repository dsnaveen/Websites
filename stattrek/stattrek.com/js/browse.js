/* 
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Script for the "browse" user controls
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

//Hide the Wizard section of the browse-site user control
function browse_HideWizardSection() {

    //Get h2 element from the Wizard section
    var H2Tag = document.getElementById("browse-wizardH");

    //Get ul element from the Wizard section
    var UlTag = document.getElementById("browse-wizardB");

    //Hide section
    H2Tag.style.display = "none";
    UlTag.style.display = "none";

}

//Hide the Help section of the browse-site user control
function browse_HideHelpSection() {

    //Get h2 element from the Help section
    var H2Tag = document.getElementById("browse-helpH");

    //Get ul element from the Help section
    var UlTag = document.getElementById("browse-helpB");

    //Hide section
    H2Tag.style.display = "none";
    UlTag.style.display = "none";

}

//Hide the Stat Tools section of the browse-site user control
function browse_HideToolsSection() {

    //Get h2 element from the Help section
    var H2Tag = document.getElementById("browse-toolsH");

    //Get ul element from the Help section
    var UlTag = document.getElementById("browse-toolsB");

    //Hide section
    H2Tag.style.display = "none";
    UlTag.style.display = "none";

}

//Hide the Tables section of the browse-site user control
function browse_HideTablesSection() {

    //Get h2 element from the Help section
    var H2Tag = document.getElementById("browse-tablesH");

    //Get ul element from the Help section
    var UlTag = document.getElementById("browse-tablesB");

    //Hide section
    H2Tag.style.display = "none";
    UlTag.style.display = "none";

}

//Hide the Browse section of the stat-tables user control
function browse_HideBrowseSectionOfStat() {

    //Get h2 element from the Help section
    var H2Tag = document.getElementById("BrowseStatH");

    //Get ul element from the Help section
    var UlTag = document.getElementById("BrowseStatB");

    //Hide section
    H2Tag.style.display = "none";
    UlTag.style.display = "none";

}

//Hide the Browse section of the tools user control
function browse_HideBrowseSectionOfTools() {

    //Get h2 element from the Help section
    var H2Tag = document.getElementById("BrowseToolsH");

    //Get ul element from the Help section
    var UlTag = document.getElementById("BrowseToolsB");

    //Hide section
    H2Tag.style.display = "none";
    UlTag.style.display = "none";

}


