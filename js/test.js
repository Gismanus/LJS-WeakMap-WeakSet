let ms = Date.parse('2022-09-28T13:00:00');
ms = new Date(ms);
console.log(ms);
let date = new Date(2022, 8, 28, 0, 0, 0);
console.log(date.getTime())
console.log(ms)
function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 1e6; i++) f(date1, date2);
    return Date.now() - start;
}

console.log(bench(diffGetTime), bench(diffSubtract));