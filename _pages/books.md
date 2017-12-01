---
layout: page
title: Books
date: 2017-09-06 8:00:00
permalink: "/books/"
---

{% for book in site.data.content.books %}

<div class="movie-container">

    <div class="movie-image">
    
        <img src="/assets/img/books/{{ book.image }}.jpg"/>
    
    </div>

    <div class="movie-content">
    
        <h4 class="movie-year">{{ forloop.index }}</h4>
    
        <h3 class="movie-title"> {{ book.title }} </h3>
    
        <h4 class="movie-year"> {{ book.author }} </h4>
    
        <p class="movie-description"> {{ book.description }} </p>
    
        <p class="movie-review"> {{ book.review }} </p>
    
    </div>

</div>

{% endfor %}