---
layout: portfolio
title: Stock Dashboard
date: 2017-09-06 8:00:00
permalink: "/stock-dashboard/"
progress: 80
---

<a class="button" href="/workspace/iextrading/">
Web Demo
</a>

I have a strong passion for investing and love viewing the rise and falls of the market, however, the
pre-existing app solutions just weren't cutting it for me so I decided to build my own. Using the IEX Trader 
finance API, I am able to store the most recent stock data on my personal server in a predefined format
to simplify the parsing and restful API setup for the iOS and Android app I am building.

<br>

Due to the simplicity and ease of use, the apps are being configured using the Microsoft Xamarin platform,
which is a free addition to Visual Studio on Windows or a native, fully-fledged IDE on MacOS. The stock
data is currently stored in a CSV which is updated every 5 minutes on my server but will soon be pushed to
a database on my server for future testing (an eventual algorithm building).

<br>

This basic test queries the yahoo finance rest api using an encoded url. Each stock is individually requested
via java script on the clientside, although I have my own rest api running on my server containing an up to
date json of all the most important data for all the major stocks.

<br>

<h3>Version 1 (Yahoo Finance)</h3>
![Version 1](/assets/img/portfolio/stock-dashboard/version-1.jpg)

<br>

<h3>Version 2 (IEX Trader)</h3>
![Version 2](/assets/img/portfolio/stock-dashboard/version-2.jpg)