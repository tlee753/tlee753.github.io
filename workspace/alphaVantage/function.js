function getStockData(ticker) {
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + ticker + "&apikey=FEOJOHR7D6JZW8HL";
    // console.log(url);
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) { month = '0' + month; }
    if (day < 10) { day = '0' + day; }
    var dateText = date.getFullYear() + "-" + month + "-" + day;
    console.log(dateText);

    $.getJSON(url, function(data) {
        console.log(data);
        var price = data["Time Series (Daily)"][dateText]["1. open"];
        // var text = "Open: " + data["Time Series (Daily)"][dateText]["1. open"];
        console.log(price);
        $("#" + ticker).html(ticker.toUpperCase() + ": " + price);
    });
}

var symbols = document.getElementsByClassName("stockView");

console.log(symbols);

$(document).ready(function() {
    Array.from(symbols).forEach(function(currentValue) {
        getStockData(currentValue.id);
    });
    //symbols.each(function(i) { console.log("hello"); } );
});

// use a class for all the stocks, update them automatically by putting all members of class in an array