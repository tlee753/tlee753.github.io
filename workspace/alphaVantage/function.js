function getStockData(ticker) {
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + ticker + "&apikey=FEOJOHR7D6JZW8HL";
    var date = new Date();
    var dateText = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    $.getJSON(url, function(data) {
        var text = "Open: " + data["Time Series (Daily)"][dateText]["1. open"];
        $("#" + ticker).html(text);
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