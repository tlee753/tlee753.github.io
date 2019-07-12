---
layout: portfolio
title: Text Server
date: 2017-09-06 8:00:00
permalink: "/text-server/"
progress: 100
---


The idea behind this project is to create a modular, text message based information retrieval system for various applications. In areas where cellular data is lacking, having this functionality could be instrumental in offloading network bandwith to servers. The server can be also be set up to run periodically (current functionality). Ideas for modules include the following:

- stock market information
- map location and directions
- sports scores
- health data
- checking email


<br>

Ideation
![Demo](/assets/img/portfolio/text-server/demo.png)

<br>

Initially, I built out a text messaging server in java which would text me (via email forwarding) the price of various stocks I was interested in each morning. I'd have to search for pictures of the output, but it was just a simple list of tickers and prices cron-jobbed to text me at market open and close.

<br>

<a class="button" href="https://github.com/tlee753/text-server">
Java Initial Build Github
</a>

<br>

After some stagnation with the project, I brought it back up as a secured, database driven implementation of a remote health care service codenamed "Cellside Assistance". The system works via a modular dockerized model which utilizes google-voice and a python API as an external interface and a flask web server for local viewing. These interfaces are connected to an psuedo-intelligent language parser and of course a dockerized secure mongo database.

<br>

<a class="button" href="https://github.com/tlee753/cellside-assistance">
Python/GoogleVoice/Docker Github
</a>


<br>

Dockerized Flask Server
![Server](/assets/img/portfolio/text-server/server.png)
