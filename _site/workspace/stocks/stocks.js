function getStockData(ticker) {
    var url = "http://query.yahooapis.com/v1/public/yql";
    var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + ticker + "')");

    $.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
        .done( function(data) {
            document.getElementById(ticker).innerHTML = ticker.toUpperCase() + ": $" + data.query.results.quote.LastTradePriceOnly;
        })
        .fail( function(data) {
            document.getElementById(ticker).innerHTML = "Error";
            console.log("Please check connection and contact administrator.");
        });
}

var symbols = ['aapl', 'amd', 'amzn', 'dis', 'ea', 'fb', 'fit', 'goog', 'ibm', 'intc', 'msft', 'nflx', 'nvda', 'twtr', 'txn', 'yhoo', 'cvx', 'rds-a', 'slb', 'psx', 'ba', 'lmt', 'cost', 'ge', 'hon', 'shop', 't', 'wmt', 'vz', 'bac', 'fis', 'ma', 'town', 'v', 'f', 'gm', 'tsla', 'tm'];

for (i = 0; i < symbols.length; i++) {
    window.onload = getStockData(symbols[i]);
}

// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=
