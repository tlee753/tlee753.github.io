function getData(ticker) {
    var url = "http://query.yahooapis.com/v1/public/yql";
    //var symbol = $(ticker).val();
    var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + ticker + "')");

    $.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
        .done(function (data) {
             document.getElementById(ticker).text(ticker.toUpperCase() + ": $" + data.query.results.quote.LastTradePriceOnly);
            //$("#result").text(ticker.toUpperCase() + ": $" + data.query.results.quote.LastTradePriceOnly);
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            $("#result").text('Request failed: ' + err);
        });
}
