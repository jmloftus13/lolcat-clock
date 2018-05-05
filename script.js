var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var isPartyTime = false;

var updateClock = function(){

    var message = document.getElementById("timeEvent");
    var lolcat = document.getElementById('lolcat');
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";


    if (time == partyTime){
        messageText = "IZ PARTEE TIME!!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "IZ NAP TIME...";
    } else if (time == lunchTime) {
        image = "http://1.bp.blogspot.com/--iDuNWHgtZs/T0wHM_0rCZI/AAAAAAAAD94/cEAPcsAkssE/s1600/21-cats-having-lunch-cat-cats-kitten-kitty-pic-picture-funny-lolcat-cute-fun-lovely-photo-images.jpg";
      messageText = "IZ NOM NOM NOM TIME!!";
    } else if (time == wakeupTime) {
        image = "http://1funny.com/wp-content/uploads/2012/11/wake-up.jpg";
      messageText = "IZ TIME TO GETTUP.";
    } else if (time < noon) {
      messageText = "Good morning!";
    } else if (time > evening) {
      messageText = "Good Evening!";
    } else {
      messageText = "Good afternoon!";
    }

    message.innerText = messageText;
    //link image variable to the HTML ID variable (lolcat)
    lolcat.src = image;

    var showCurrentTime = function()
    {
        // display the string on the webpage
        var clock = document.getElementById('clock');

        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // Set hours
        if (hours >= noon)
        {
            meridian = "PM";
        }
        if (hours > noon)
        {
            hours = hours - 12;
        }

        // Set Minutes
        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }

        // Set Seconds
        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

        clock.innerText = clockTime;
    };//end showCurrentTime
    showCurrentTime();
}; //end updateClock
updateClock();
//set 1 second equalt to 1000ms
var oneSecond = 1000;
//call function with interval amount
setInterval(updateClock, oneSecond);

//event-based javascript below
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

//partytime button changes
var partyEvent = function () {
  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton = "Party Over!";
    document.body.style.background = "#0A8DAB";
  } else{
     isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton = "Party Time!";
      document.body.style.background = "#222";
  }//end else
};//end partyEvent

//wakeup selector changes
var wakeUpEvent = function (){
    wakeupTime = wakeUpTimeSelector.value;
};//end wakeUpEvent

//lunch selector changes
var lunchEvent = function (){
    lunchTime = lunchTimeSelector.value;
};//end lunchEvent

//naptime selector changes
var napEvent = function (){
    napTime = napTimeSelector.value;
};//end lunchEvent

partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
