// Write a JavaScript program to display the current day and time.

const today = new Date();
const day = today.getDay();

const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log("Today is : " + daylist[day] + ".")

let hour = today.getHours();
let mintute = today.getMinutes();
let second = today.getSeconds();

let prepand = (hour >= 12) ? " PM" : " AM";
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepand === 'PM'){
    if (mintute === 0 && second === 0){
        hour = 12;
        prepand = " Noon";
    } else {
        hour = 12;
        prepand = " PM";
    }
}

if (hour === 0 && prepand === 'AM'){
    if (mintute === 0 && second === 0){
        hour = 12;
        prepand = " Midnight";
    } else {
        hour = 12;
        prepand = " AM";
    }
}

console.log("Current Time: " + hour + prepand + " : " + mintute + ":" + second);