---
layout: page
title: Stock Monitoring App
date: 2017-09-06 8:00:00
permalink: "/stock-monitoring-app/"
---

<section class="portfolio-page" style="background-image: url(/assets/img/portfolio/stock-monitoring-app/display.jpg);">

<div class="portfolio-content" markdown="1">

### Cross Platform Stock Monitoring App
I have a strong passion for investing and love viewing the rise and falls of the market, however, the
pre-existing app solutions just weren't cutting it for me so I decided to build my own. Using the Yahoo
finance API, I am able to store the most recent stock data on my personal server in a predefined format
to simplify the parsing and restful API setup for the iOS and Android app I am building.

<br>

Due to the simplicity and ease of use, the apps are being configured using the Microsoft Xamarin platform,
which is a free addition to Visual Studio on Windows or a native, fully-fledged IDE on MacOS. The stock
data is currently stored in a CSV which is updated every 5 minutes on my server but will soon be pushed to
a database on my server for future testing (an eventual algorithm building).


This basic test queries the yahoo finance rest api using an encoded url. Each stock is individually requested
via java script on the clientside, although I have my own rest api running on my server containing an up to
date json of all the most important data for all the major stocks. Currently I am taking a look at the bloomberg api.

</div>

</section>