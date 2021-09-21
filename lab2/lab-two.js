
function getDayOfTheWeek ( year, month, day) {
    var listOfDaysOfTheWeek = ["Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
     
    //only look at last two digits of year, determine how many 12's fit in it 
        var lastTwoDigitsOfYear = (year % 100);
        var numOfTwelvesInLastTwoDigits = Math.floor((lastTwoDigitsOfYear / 12));
        var remainder = (lastTwoDigitsOfYear - numOfTwelvesInLastTwoDigits * 12);
        var foursInRemainder = Math.floor(remainder/4);
        
     
        if (month == "January") {
            var monthCode = 1;
        } else if (month == "February") {
            var monthCode = 4;
        } else if (month == "March") {
            var monthCode = 4;
        } else if (month == "April") {
            var monthCode = 0;
        } else if (month == "May") {
            var monthCode = 2;
        } else if (month == "June") {
            var monthCode = 5;
        } else if (month == "July") {
            var monthCode = 0;
        } else if (month == "August") {
            var monthCode = 3;
        } else if (month == "September") {
            var monthCode = 6;
        } else if (month == "October") {
            var monthCode = 1;
        } else if (month == "November") {
            var monthCode = 4;
        } else if (month == "December") {
            var monthCode = 6;
        } 
     
        
        if(isLeapYear(year) && (month == "January" || month == "February")) {
            monthCode -= 1;
        }
     
        if(year >= 2100) {
            monthCode += 4;
        } else if( year >= 2000) {
            monthCode += 6;
        } else if( year >= 1900) {
            monthCode += 0;
        } else if( year >= 1800) {
            monthCode += 2;
        } else if( year >= 1700) {
            monthCode += 4;
        } else if( year >= 1600) {
            monthCode += 6;
        }
     
        var addAllAboveNumbers = numOfTwelvesInLastTwoDigits + remainder + foursInRemainder + day + monthCode;
        var sumModSevenResult = (addAllAboveNumbers % 7);
        
        var dayOfTheWeek = listOfDaysOfTheWeek[sumModSevenResult];
        
        return dayOfTheWeek;
     
    }
     
     
    function isLeapYear(year) {
        if(year % 4 != 0) {
            return false;
        } else if (year % 100 != 0) {
            return true;
        } else if (year % 400 != 0) {
            return false;
        } else {
            return true;
        }
    }

    
     
    function makeCalendar() {
        var jan1st2021 = 1609488000000 - 86400000;
        for (var i = 0; i < 365; i++ ) {
                jan1st2021 = jan1st2021 + 86400000; 
               var timestamps = (jan1st2021);
               var date = new Date(timestamps);
               var dayOfWeekName = new Date(timestamps).toLocaleDateString('en-US', {weekday: 'long' });
               console.log( (date.getMonth()+1) + "-" + date.getDate() + "-" + date.getFullYear() + " is a " + dayOfWeekName);
            }
    }
     
    module.exports = { getDayOfTheWeek, makeCalendar };
     
    