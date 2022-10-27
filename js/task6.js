function getSecondsToTomorrow() {
    let now = new Date();
    let tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0, 0, 0);

    console.log(now);
    console.log(tommorow);

    let res = Math.floor((tommorow - now)/1000);
    console.log(res);
}
getSecondsToTomorrow();