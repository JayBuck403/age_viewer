#!/usr/bin/env node

/**
 * myDigitalClock - This function creates a digital clock.
 * 		    It prints the time to the console every second.
 */



function myDigitalClock () {
  var date = new Date();
  var hours = date.getHours();		// 0 - 23
  var minutes = date.getMinutes();	// 0 -59
  var seconds = date.getSeconds();	// 0 - 59
  var zone = "AM";

  if (hours >= 12) {
    if (hours > 12) {
      hours -= 12;
    }
    zone = "PM";
  } else if (hours == 0) {
      hours = 12;
      zone = "AM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let myTime = hours + ":" + minutes + ":" + seconds + " " + zone;
  console.log(myTime);
}

myDigitalClock();

setInterval(myDigitalClock, 1000);
