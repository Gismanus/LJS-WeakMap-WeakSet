function getSecondsToday(){
    let now = new Date();
    let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0);
    let result = Math.floor((now - midnight) / 1000);
    console.log(midnight);
    console.log(now);
    console.log(result);    
}

getSecondsToday();