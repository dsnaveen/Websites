/* 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
JAVASCRIPT CALCULATOR FUNCTIONS.
These functions enhance usability for various Stat Trek calculators
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

/*
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
BINOMIAL CALCULATOR FUNCTIONS
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

/* Update probability labels, based on the number of successes entered by User. */
function UpdateProbabilityLabelsForBinomialCalculator() {

    //Declare text box that holds number of successes
    var txtSuccess = document.getElementById("txtSuccess");

    //Declare td elements that display probability labels
    var tdXEQx = document.getElementById("tdXEQx");
    var tdXLTx = document.getElementById("tdXLTx");
    var tdXLEx = document.getElementById("tdXLEx");
    var tdXGTx = document.getElementById("tdXGTx");
    var tdXGEx = document.getElementById("tdXGEx");

    //Update probability labels
    if (IsInteger(txtSuccess.value) && txtSuccess.value >= 0) {
        tdXEQx.innerHTML = "Binomial Probability: P(X = " + txtSuccess.value + ")";
        tdXLTx.innerHTML = "Cumulative Probability: P(X < " + txtSuccess.value + ")";
        tdXLEx.innerHTML = "Cumulative Probability: P(X <u><</u> " + txtSuccess.value + ")";
        tdXGTx.innerHTML = "Cumulative Probability: P(X > " + txtSuccess.value + ")";
        tdXGEx.innerHTML = "Cumulative Probability: P(X <u>></u> " + txtSuccess.value + ")";
    }
    else {
        alert("Warning! The number of successes must be a non-negative integer.");
        tdXEQx.innerHTML = "Binomial Probability: P(X = x)";
        tdXLTx.innerHTML = "Cumulative Probability: P(X < x)";
        tdXLEx.innerHTML = "Cumulative Probability: P(X <u><</u> x)";
        tdXGTx.innerHTML = "Cumulative Probability: P(X > x)";
        tdXGEx.innerHTML = "Cumulative Probability: P(X <u>></u> x)";
    }
}

//Clear output text boxes when User enters new input
function ClearOutputForBinomialCalculator() {
    //Declare input elements that display calculator output
    var txtXEQx = document.getElementById("txtXEQx");
    var txtXLTx = document.getElementById("txtXLTx");
    var txtXLEx = document.getElementById("txtXLEx");
    var txtXGTx = document.getElementById("txtXGTx");
    var txtXGEx = document.getElementById("txtXGEx");

    //Clear output text boxes
    txtXEQx.value = "";
    txtXLTx.value = "";
    txtXLEx.value = "";
    txtXGTx.value = "";
    txtXGEx.value = "";
}

/*
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
CHI-SQUARE CALCULATOR FUNCTIONS
NOTE: For this function to work, need to change Asp.Net textbox control 
      to HTML input control
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

/* Update probability labels, based on the number of successes entered by User. */
function UpdateProbabilityLabelsForChiSquareCalculator() {

    //Declare text box that holds chi-square critical value
    var txtCritical = document.getElementById("txtValue");

    //Declare td element that displays probability label
    var tdProb = document.getElementById("tdProb");

    //Update probability label
    if (txtCritical.value >= 0) {
        tdProb.innerHTML = "Cumulative probability: P(Χ<sup>2</sup> < " + txtCritical.value + ")";
    }
    else {
        alert("Warning! The chi-square critical value must be zero or greater.");
        tdProb.innerHTML = "Cumulative probability: P(Χ<sup>2</sup> < CV)" ;
    }
}

/*
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
F DISTRIBUTION CALCULATOR FUNCTIONS
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

/* Update probability label, based on the f value entered by User. */
function UpdateProbabilityLabelsForFCalculator() {

    //Declare text box that holds current f value
    var txtFValue = document.getElementById("txtValue");

    //Declare td element that displays probability labels    
    var tdXLEx = document.getElementById("tdXLEx");

    //Update probability label
    if (IsNumeric(txtFValue.value) && txtFValue.value >= 0 && txtFValue.value != "") {
        tdXLEx.innerHTML = "Cumulative prob:<br />P(F <u><</u> " + txtFValue.value + ")";
    }
    else {
        tdXLEx.innerHTML = "Cumulative prob:<br />P(F <u><</u> f)";
    }
}

/*
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
POISSON CALCULATOR FUNCTIONS
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

/* Update probability labels, based on the number of successes entered by User. */
function UpdateProbabilityLabelsForPoissonCalculator() {

    //Declare text box that holds number of successes
    var txtRV = document.getElementById("txtRV");

    //Declare td elements that display probability labels
    var tdXEQx = document.getElementById("tdXEQx");
    var tdXLTx = document.getElementById("tdXLTx");
    var tdXLEx = document.getElementById("tdXLEx");
    var tdXGTx = document.getElementById("tdXGTx");
    var tdXGEx = document.getElementById("tdXGEx");

    //Update probability labels
    if (IsInteger(txtRV.value) && txtRV.value >= 0) {
        tdXEQx.innerHTML = "Binomial Probability: P(X = " + txtRV.value + ")";
        tdXLTx.innerHTML = "Cumulative Probability: P(X < " + txtRV.value + ")";
        tdXLEx.innerHTML = "Cumulative Probability: P(X <u><</u> " + txtRV.value + ")";
        tdXGTx.innerHTML = "Cumulative Probability: P(X > " + txtRV.value + ")";
        tdXGEx.innerHTML = "Cumulative Probability: P(X <u>></u> " + txtRV.value + ")";
    }
    else {
        alert("Warning! The Poisson random variable must be a non-negative integer.");
        tdXEQx.innerHTML = "Binomial Probability: P(X = x)";
        tdXLTx.innerHTML = "Cumulative Probability: P(X < x)";
        tdXLEx.innerHTML = "Cumulative Probability: P(X <u><</u> x)";
        tdXGTx.innerHTML = "Cumulative Probability: P(X > x)";
        tdXGEx.innerHTML = "Cumulative Probability: P(X <u>></u> x)";
    }
}

//Clear output text boxes when User enters new input
function ClearOutputForPoissonCalculator() {
    //Declare input elements that display calculator output
    var txtXEQx = document.getElementById("txtXEQx");
    var txtXLTx = document.getElementById("txtXLTx");
    var txtXLEx = document.getElementById("txtXLEx");
    var txtXGTx = document.getElementById("txtXGTx");
    var txtXGEx = document.getElementById("txtXGEx");

    //Clear output text boxes
    txtXEQx.value = "";
    txtXLTx.value = "";
    txtXLEx.value = "";
    txtXGTx.value = "";
    txtXGEx.value = "";
}

/*
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
HYPERGEOMETRIC CALCULATOR FUNCTIONS
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

/* Update probability labels, based on the number of successes entered by User. */
function UpdateProbabilityLabelsForHypergeometricCalculator() {

    //Declare text box that holds number of successes
    var txtSampSuccess = document.getElementById("txtSampSuccess");
    var tdSampSuccess = document.getElementById("tdSampSuccess");

    //Declare td elements that display probability labels
    var tdXEQx = document.getElementById("tdXEQx");
    var tdXLTx = document.getElementById("tdXLTx");
    var tdXLEx = document.getElementById("tdXLEx");
    var tdXGTx = document.getElementById("tdXGTx");
    var tdXGEx = document.getElementById("tdXGEx");

    //Update probability labels
    if (IsInteger(txtSampSuccess.value) && txtSampSuccess.value >= 0) {
        tdXEQx.innerHTML = "Hypergeometric Probability: P(X = " + txtSampSuccess.value + ")";
        tdXLTx.innerHTML = "Cumulative Probability: P(X < " + txtSampSuccess.value + ")";
        tdXLEx.innerHTML = "Cumulative Probability: P(X <u><</u> " + txtSampSuccess.value + ")";
        tdXGTx.innerHTML = "Cumulative Probability: P(X > " + txtSampSuccess.value + ")";
        tdXGEx.innerHTML = "Cumulative Probability: P(X <u>></u> " + txtSampSuccess.value + ")";
        tdSampSuccess.innerHTML = "Number of successes in sample (x)";
    }
    else {
        tdXEQx.innerHTML = "Hypergeometric probability: P(X = x)";
        tdXLTx.innerHTML = "Cumulative probability: P(X < x)";
        tdXLEx.innerHTML = "Cumulative probability: P(X <u><</u> x)";
        tdXGTx.innerHTML = "Cumulative probability: P(X > x)";
        tdXGEx.innerHTML = "Cumulative probability: P(X <u>></u> x)";
        tdSampSuccess.innerHTML = "Number of successes in sample (x)";
    }
}

//Clear output text boxes when User enters new input
function ClearOutputForHypergeometricCalculator() {
    //Declare input elements that display calculator output
    var txtXEQx = document.getElementById("txtXEQx");
    var txtXLTx = document.getElementById("txtXLTx");
    var txtXLEx = document.getElementById("txtXLEx");
    var txtXGTx = document.getElementById("txtXGTx");
    var txtXGEx = document.getElementById("txtXGEx");

    //Clear output text boxes
    txtXEQx.value = "";
    txtXLTx.value = "";
    txtXLEx.value = "";
    txtXGTx.value = "";
    txtXGEx.value = "";
}

/*
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
NEGATIVE BINOMIAL CALCULATOR FUNCTIONS
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

/* Update probability labels, based on the number of successes entered by User. */
function UpdateProbabilityLabelsForNegativeBinomialCalculator() {

    //Declare text box that holds number of successes
    var txtSuccess = document.getElementById("txtSuccess");

    //Declare td element that displays probability label
    var tdBinProb = document.getElementById("tdBinProb");

    //Update probability label
    if (IsInteger(txtSuccess.value) && txtSuccess.value >= 0) {
        tdBinProb.innerHTML = "Negative binomial probability: P(X = " + txtSuccess.value + ")";
    }
    else {
        tdBinProb.innerHTML = "Negative binomial probability";
    }
}

//Clear output text boxes when User enters new input
function ClearOutputForNegativeBinomialCalculator() {
    //Declare input elements that display calculator output
    var txtBinProb = document.getElementById("txtBinProb");

    //Clear output textbox
    txtBinProb.value = "";
}

/*
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
NORMAL CALCULATOR FUNCTIONS
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

/* Update probability labels, based on the number of successes entered by User. */
function UpdateProbabilityLabelsForNormalCalculator() {

    //Declare text boxes that hold mean, standard deviation, and value
    var txtMean = document.getElementById("txtMean");
    var txtSD = document.getElementById("txtSD");
    var txtValue = document.getElementById("txtValue");

    //Declare td elements that probability and random variable labels
    var tdValue = document.getElementById("tdValue");
    var tdProbability = document.getElementById("tdProbability");

    //Update probability labels
    if (txtMean.value == 0 && txtSD.value == 1) {
        tdValue.innerHTML = "Standard score (z)";
        if (IsNumeric(txtValue.value) && txtValue.value) {
            tdProbability.innerHTML = "Probability:<br />P(Z <u><</u> " + txtValue.value + ")";
        }
        else {
            tdProbability.innerHTML = "Probability:<br />P(Z <u><</u> z)";
        }
    }
    else {
        tdValue.innerHTML = "Normal random variable (x)";
        if (IsNumeric(txtValue.value)) {
            tdProbability.innerHTML = "Probability:<br />P(X <u><</u> " + txtValue.value + ")";
        }
        else {
            tdProbability.innerHTML = "Probability:<br />P(X <u><</u> x)";
        }
    }
}

/*
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
T DISTRIBUTION CALCULATOR FUNCTIONS
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

/* Update probability labels, based on random variable value. */
function UpdateControlsForTDistributionCalculator() {

    //Get value of random variable dropdown list
    var ddl = document.getElementById("ddlRV");
    var ddlValue = ddl.options[ddl.selectedIndex].value;

    //Clear the txtValue input control
    //var txtValue = document.getElementById("txtValue");
    //txtValue.innerText = "";

    //Update controls when the random variable is "t score"
    if (ddlValue == "t score") {
        //Hide the sample standard deviation and population mean
        var divSd = document.getElementById("divStdDev");
        divSd.style.display = "none";

        var divPopMean = document.getElementById("divPopMean");
        divPopMean.style.display = "none";

        //Set tdValueLabel equal to "t score"
        var divRv = document.getElementById("divRv");
        divRv.innerHTML = "t score";

        //Set tdProbabilityLabel equal to "Cumulative probability:<br />P(T <u><</u> t)"
        var divProbabilityLabel = document.getElementById("divProbabilityLabel");
        divProbabilityLabel.innerHTML = "Probability:<br />P(T <u><</u> t)";

    }

    //Update controls when the random variable is "Sample mean"
    if (ddlValue == "Sample mean") {
        //Show the sample standard deviation and population mean
        var divSd = document.getElementById("divStdDev");
        divSd.style.display = "block";

        var divPopMean = document.getElementById("divPopMean");
        divPopMean.style.display = "block";

        //Set value label equal to "Sample mean"
        var divRv = document.getElementById("divRv");
        divRv.innerHTML = "Sample mean";

        //Set tdProbabilityLabel equal to "Cumulative Probability:<br />P(<span class='Over'>X</span> <u><</u> <span class='Over'>x</span>)"
        var divProbabilityLabel = document.getElementById("divProbabilityLabel");
        divProbabilityLabel.innerHTML = "Probability: P(<span class='Over'>X</span> <u><</u> <span class='Over'>x</span>)";
    }

    UpdateProbabilityLabelsForTDistributionCalculator();

}

/* Update probability labels, based on value of random variable entered by User. */
function UpdateProbabilityLabelsForTDistributionCalculator() {

    //Get text box that holds the value of the random variable
    var txtValue = document.getElementById("txtValue");

    //Get value of random variable dropdown list
    var ddl = document.getElementById("ddlRV");
    var ddlValue = ddl.options[ddl.selectedIndex].value;

    //Declare div elements that display input labels
    var divProbabilityLabel = document.getElementById("divProbabilityLabel");

    //Update probability label
    if (ddlValue == "t score") {
        if (IsNumeric(txtValue.value)) {
            divProbabilityLabel.innerHTML = "Probability: P(T <u><</u> " + txtValue.value + ")";
        }
        else {
            divProbabilityLabel.innerHTML = "Probability: P(T <u><</u> t)";
        }
    }
    else {
        if (IsNumeric(txtValue.value)) {
            divProbabilityLabel.innerHTML = "Probability: P(<span class='Over'>X</span> <u><</u> " + txtValue.value + ")";
        }
        else {
            divProbabilityLabel.innerHTML = "Probability: P(<span class='Over'>X</span> <u><</u> <span class='Over'>x</span>)";
        }
    }
}

/*
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
COMBINATIONS AND PERMUTATIONS CALCULATOR 
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*//* Update labels, based on value of ddlGoal dropdown listbox. */
function UpdateLabelsForPermutationsCalculator() {

    //Get the value of the dropdown listbox
    var ddl = document.getElementById("ddlGoal");
    var ddlValue = ddl.options[ddl.selectedIndex].value;

    //Get text to be updated
    var DV = document.getElementById("DV");
    var DVs = document.getElementById("DVs");
    var Num = document.getElementById("txtNumOfCombinations");

    //Update text
    if (ddlValue == "Count permutations") {
        DV.innerText = "permutation";
        DVs.innerText = "permutations";
    }
    else {
        DV.innerText = "combination";
        DVs.innerText = "combinations";
    }
    
}




