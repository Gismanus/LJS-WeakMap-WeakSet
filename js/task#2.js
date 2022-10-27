function getWeekDay(date) {
    let days = ['Sunday', 'Mondey', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suterday'];
    console.log(date);
    return days[date.getDay()];

}

function getLocalDay(date) {
    let days = ['Sunday', 'Mondey', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suterday'];
    console.log(date);
    return date.getDay() || 7;

}
let date = new Date(2012, 0, 8, 4);
console.log(getWeekDay(date));
console.log(getLocalDay(date));