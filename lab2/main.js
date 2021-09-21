var readlineSync = require("readline-sync");
 
var getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
 
var makeCalendar = require("./lab-two").makeCalendar;
 
 
makeCalendar();
 
 
var yearInput = Number(readlineSync.question("Please enter a year: "));
 
var monthInput = readlineSync.question("Please enter a month: ");
 
var dateInput = Number(readlineSync.question("Please enter a date: "));
 
console.log("That date falls on: " + getDayOfTheWeek(yearInput, monthInput, dateInput));
