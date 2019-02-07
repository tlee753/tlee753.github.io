function getStockData(ticker) {
    var url = "https://api.iextrading.com/1.0/stock/market/batch?symbols=" + ticker + "&types=quote&range=1m&last=1";
    // console.log(url);

    $.getJSON(url, function(data) {
        // console.log(data);
        var price = data[ticker.toUpperCase()]["quote"]["latestPrice"];
        // console.log(price);
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