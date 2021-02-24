let getcurrenttime = function() {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formattime = `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;

    return formattime;
}

let getloggingtime = function() {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formattime = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;

    return formattime;
}

module.exports.getcurrenttime = getcurrenttime;
module.exports.getloggingtime = getloggingtime;