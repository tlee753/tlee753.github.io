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
to simplify the parsing and restful API setup.

<br>

The stock data is currently stored in a CSV which is updated every 5 minutes on my server but will soon be pushed to
a database on my server for future testing (an eventual algorithm/machine learning work).

<br>

I also just wanted to create a static web demo that anyone could use to easily monitor a selection of stocks without having to constantly log into a server, so I separated my front end to serve such a purpose. You can get your own API key from IEX trader from [their API site](https://iextrading.com/developer/docs/).

<br>

<h3>Version 1 (Yahoo Finance)</h3>
![Version 1](/assets/img/portfolio/stock-dashboard/version-1.jpg)

<br>

<h3>Version 2 (IEX Trader)</h3>
![Version 2](/assets/img/portfolio/stock-dashboard/version-2.jpg)