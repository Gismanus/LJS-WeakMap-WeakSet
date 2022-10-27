function getDateAgo(date, days){
    let present = date;
    let past = new Date(date - days * 24 * 1000 * 3600)
    console.log(present);
    console.log(past + ' was ' + days + ' ago');
}
let date = new Date(2015, 0, 2);
getDateAgo(date, 1);
getDateAgo(date, 2);
getDateAgo(date, 365);