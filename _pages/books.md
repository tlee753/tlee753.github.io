---
layout: page
title: Books
date: 2017-09-06 8:00:00
permalink: "/books/"
---

{% for item in site.data.books %}
    {% assign index = forloop.index %}
    {% for book in item %}

<div class="movie-container">

    <div class="movie-image">
        <img src="/assets/img/books/{{ book[1].image }}.jpg"/>
    </div>

    <div class="movie-content">
        <h4 class="movie-year">{{ index }}</h4>
        <h3 class="movie-title">{{ book[0] }}</h3>
        <h4 class="movie-year">{{ book[1].author }}</h4>
        <p class="movie-description">{{ book[1].desc }}</p>
    </div>

</div>

    {% endfor %}
{% endfor %}
