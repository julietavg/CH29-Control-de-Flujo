

/**
 * Part 1
 * By reading the dayNumber and the hourNumber, prints 
 * whether it is business hours or not. 
 * 
 * @param {number} dayNumber Starts with 0 (Sunday)
 * @param {number} hourNumber 24-hour clock system
 * @returns {boolean} 
 */
function bussinesHours(dayNumber, hourNumber) {
    if ((dayNumber != 0 && dayNumber != 6) && 
    (hourNumber >= 9 && hourNumber <= 18 &&
        hourNumber != 14)) {
        return true;
    } else {
        return false;
    }
    
}

console.log(bussinesHours(3,15));

/**
 *  Part 2
 * Calculate and return the day of the week corresponding to the yearDayNumber passed.
 * 
 * @param {number} janFirstDayNumber ranging from 0 to 365. 
 * @param {number} yearDayNumber ranging from 0 to 6, 
 * representing the day of the week of January 1st
 * @returns day of the week
 */
function getDayNumber(janFirstDayNumber,yearDayNumber) {
if(yearDayNumber < 364 && janFirstDayNumber <= 7){
 let day = (janFirstDayNumber + yearDayNumber-1) % 7;

 if(day == 0){
    return day + " Sunday";
 }else if(day == 1){
    return day + " Monday";
}else if(day == 2){
    return day + " Tuesday";
}else if(day == 3){
    return day + " Wednesday";
}else if(day == 4){
    return day + " Thursday";
}else if(day == 5){
    return day + " Friday";
}else {
    return day +" Saturday";
 }
}else{
    console.log("Please input a valid date");
}
}
        
    
console.log(getDayNumber(6,127));

/**
 *  Part 3
 * Finally, build a function that, 
 * from a yearDayNumber (int, 0-365) and an hourNumber 
 * (int, 0-23), returns true if it is business hours.
 */
function businessDay(janFirstDayNumber,yearDayNumber,hourNumber){
    if(yearDayNumber < 364 && janFirstDayNumber <= 7){
    let day = (janFirstDayNumber + yearDayNumber-1) % 7;

    if ((day != 0 && day != 6) && 
    (hourNumber >= 9 && hourNumber <= 18 &&
        hourNumber != 14)) {
        return true;
    } else {
        return false;
    }
}
}

console.log(businessDay(0,14,11));
