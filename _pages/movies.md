---
layout: page
title: Movies
date: 2017-09-06 8:00:00
permalink: "/movies/"
---

{% for movie in site.data.content.movies %}

<div class="movie-container">

    <div class="movie-image">
    
        <img src="/assets/img/movies/{{ movie.image }}.jpg"/>
    
    </div>

    <div class="movie-content">
    
        <h4 class="movie-year">{{ forloop.index }}</h4>
    
        <h3 class="movie-title"> {{ movie.title }} </h3>
    
        <h4 class="movie-year"> {{ movie.year }} </h4>
    
        <p class="movie-description"> {{ movie.description }} </p>
    
        <p class="movie-review"> {{ movie.review }} </p>
    
    </div>

</div>

{% endfor %}