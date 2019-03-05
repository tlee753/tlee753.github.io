---
layout: page
title: Ted
date: 2019-02-14
permalink: "/ted/"
---

{% for ted in site.data.content.talks %}

<div class="movie-container">

    <div class="movie-image">
    
        <img src="/assets/img/movies/{{ ted.image }}.jpg"/>
    
    </div>

    <div class="movie-content">
    
        <h4 class="movie-year">{{ forloop.index }}</h4>
    
        <h3 class="movie-title"> {{ ted.title }} </h3>
    
        <h4 class="movie-year"> {{ ted.year }} </h4>
    
        <p class="movie-description"> {{ ted.description }} </p>
    
        <p class="movie-review"> {{ ted.review }} </p>
    
    </div>

</div>

{% endfor %}