---
layout: page
title: Portfolio
date: 2017-09-06 8:00:00
permalink: "/portfolio/"
---

<div id="portfolio">

    {% for item in site.data.settings.portfolio %}

    <a href="/{{ item.folder }}" class="portfolio-unit">
        <div class="portfolio-background"
             style="background-image: url(/assets/img/portfolio/{{ item.folder }}/display.jpg);"></div>
        <div class="portfolio-overlay">
            <strong>{{ item.name }}</strong>
        </div>
    </a>

    {% endfor %}

</div>