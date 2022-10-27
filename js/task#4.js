function getLastDayOfMonth(year, month) {
    let date = new Date(Date.UTC(year, month + 1, 0));
   return date.getUTCDate();
}
console.log(getLastDayOfMonth(2010, 1));