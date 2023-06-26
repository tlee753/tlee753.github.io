---
layout: page
title: Movies
date: 2017-09-06 8:00:00
permalink: "/movies/"
---

{% for item in site.data.movies %}
    {% assign index = forloop.index %}
    {% for movie in item %}

<div class="movie-container">

    <div class="movie-image">
        <img src="/assets/img/movies/{{ movie[1].image }}.jpg"/>
    </div>

    <div class="movie-content">
        <h4 class="movie-year">{{ index }}</h4>
        <h3 class="movie-title">{{ movie[0] }}</h3>
        <h4 class="movie-year">{{ movie[1].year }}</h4>
        <p class="movie-description">{{ movie[1].desc }}</p>
    </div>

</div>

    {% endfor %}
{% endfor %}

<br>
<p style="text-align: center">Content is graciously derived from IMDB database, all copyrights reserved.</p>
