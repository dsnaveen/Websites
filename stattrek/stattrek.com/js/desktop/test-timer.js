/* 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
JAVASCRIPT TIMER FUNCTIONS.
Reference: Pollock, pp. 313 - 317.
1.  The timer counts seconds from a start point, called TimeLeft.  TimeLeft 
is measured in seconds.
2.  The StopTimer pauses the timer at TimeLeft (measured in seconds).
3.  The StartTimer re-starts the timer at TimeLeft.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/
var TimeLeft = 5400000;
var TimerRunning = false;
var TimerInterval = 1000;
var TimerID;
var NumberOfTimeLimtWarnings = 0;
var CurrentMin = 90;
var CurrentSec = 0;

//Start the timer
$(document).ready(function () {
    //UpdateTimer();
})

//Create a timing event to check every 3 seconds and re-start the timer, if necessary
var myVar = setInterval(function () { ReSetTimer() }, 2000);

//If necessary, call the UpdateTimer function when the timer is stuck on 90 minutes.
function ReSetTimer() {

    //The try/catch statement is needed because the spnMin element is not visible to 
    //javascript on some pages and will throw an error when it cannot be found.
    try {
        //Get current timer setting
        var MinuteDisplay = document.getElementById("spnMin");

        //If necessary, re-set the timer
        if ((TimeLeft < 5400000) && (MinuteDisplay.innerText == 90)) {
            UpdateTimer();
        }
    }
    catch(err){
        //alert("error");
    }  
}

//Update time remaining
function UpdateTimer() {
    if (TimerRunning) {
        TimeLeft = TimeLeft - TimerInterval;

        if (TimeLeft <= 0) {
            StopTimer();

            //Set Timer equal to 0 min and 0 sec
            var MinuteDisplay = document.getElementById("spnMin");
            var SecondDisplay = document.getElementById("spnSec");
            MinuteDisplay.innerHTML = 0;
            SecondDisplay.innerHTML = 0;

            // Warn the User when the time limit for the test has expired.
            // We only give one warning; after that, the User is on his/her own.
            if (NumberOfTimeLimtWarnings > 0) {
                NumberOfTimeLimtWarnings = 1;
                alert("The time limit for this test has elapsed.")
            }

            return;
        }

        
        try {

            //Update timer display    
            var MinuteDisplay = document.getElementById("spnMin");
            var SecondDisplay = document.getElementById("spnSec");

            MinuteDisplay.innerHTML = Math.floor(TimeLeft / 60000);
            SecondDisplay.innerHTML = (TimeLeft % 60000) / 1000;    //% is the modulus operator

            //Update pause button text
            var TimerButton = document.getElementById("butPause");
            TimerButton.value = "Pause timer";
        }
        catch(err) {
            
        }        
    }

    if (!TimerRunning) {
        try {
            var MinuteDisplay = document.getElementById("spnMin");
            var SecondDisplay = document.getElementById("spnSec");

            if (TimeLeft <= 0) {

                //Set Timer equal to 0 min and 0 sec
                MinuteDisplay.innerHTML = 0;
                SecondDisplay.innerHTML = 0;

                return;
            }

            //If necessary, re-set the timer
            if ((TimeLeft < 5400000) && (MinuteDisplay.innerText == 90)) {
                MinuteDisplay.innerHTML = Math.floor(TimeLeft / 60000);
                SecondDisplay.innerHTML = (TimeLeft % 60000) / 1000;    //% is the modulus operator
            }

            //Update pause button text
            var TimerButton = document.getElementById("butPause");
            TimerButton.value = "Start timer";

        }
        catch(err) {}
    }
}

//Set timer back to its start position
function InitializeTimer() {

    //Update the TimeLeft variable
    TimeLeft = 5400000;

    //Stop timer and update timer button (butPause) value
    StopTimer();

    //Update pause button text
    var TimerButton = document.getElementById("butPause");
    TimerButton.value = "Start timer";

    //Update timer display
    var MinuteDisplay = document.getElementById("spnMin");
    var SecondDisplay = document.getElementById("spnSec");
    MinuteDisplay.innerHTML = 90;
    SecondDisplay.innerHTML = 0;
}

//Respond to timer button clicks
function HandleTimerButton() {

    //Update CurrentMin and CurrentSec, based on current settings
    var MinuteDisplay = document.getElementById("spnMin");
    var SecondDisplay = document.getElementById("spnSec");
    CurrentMin = MinuteDisplay.innerHTML;
    CurrentSec = SecondDisplay.innerHTML;

    //Get timer button
    var TimerButton = document.getElementById("butPause");

    //Respond to button click
    if (TimerButton.value == "Pause timer") {

        //Stop timer
        StopTimer();
    }
    else {

        //Start timer
        StartTimer();
    }
}

//Pause the timer
function StopTimer() {
    if (TimerRunning) window.clearInterval(TimerID);
    TimerRunning = false;

    var TimerButton = document.getElementById("butPause");
    TimerButton.value = "Start timer";
}

//Start the timer, and let it run while TimeLeft > 0
function StartTimer() {
    //To test timer, temporarily add one line to conduct a 5-second test
    //TimeLeft = 5000;

    if (TimeLeft <= 0) {
        StopTimer();

        // Here's where we put something useful that's
        // supposed to happen after the allotted time.
        // For example, we display a message:
        alert("The time limit for this test has elapsed.")
    }
    else {
        //Update variables
        TimerRunning = true;
        TimerID = window.setInterval("UpdateTimer()", TimerInterval);    //Calls the UpdateTimer function every TimerInterval milliseconds; returns timer ID

        var TimerButton = document.getElementById("butPause");
        TimerButton.value = "Pause timer";
    }
}

