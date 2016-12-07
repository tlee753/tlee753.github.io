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

window.onload = getStockData('aapl');
window.onload = getStockData('amd');
window.onload = getStockData('amzn');
window.onload = getStockData('dis');
window.onload = getStockData('ea');
window.onload = getStockData('ibm');
window.onload = getStockData('intc');
window.onload = getStockData('fb');
window.onload = getStockData('msft');
window.onload = getStockData('nflx');
window.onload = getStockData('nvda');
window.onload = getStockData('twtr');

window.onload = getStockData('rds-a');
window.onload = getStockData('slb');
window.onload = getStockData('psx');

window.onload = getStockData('ba');

window.onload = getStockData('cost');
window.onload = getStockData('ge');
window.onload = getStockData('t');
window.onload = getStockData('wmt');
window.onload = getStockData('vz');

window.onload = getStockData('ma');
window.onload = getStockData('v');

window.onload = getStockData('f');
window.onload = getStockData('gm');
