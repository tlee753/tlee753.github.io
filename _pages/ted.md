---
layout: page
title: Ted
date: 2019-02-14
permalink: "/ted/"
---

{% for item in site.data.ted %}
    {% assign index = forloop.index %}
    {% for ted in item %}

<div class="movie-container">

    <div class="movie-image">
        <iframe width="100%" height="100%" src="{{ ted[1].link }}" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="movie-content">
        <h4 class="movie-year">{{ index }}</h4>
        <h3 class="movie-title"> {{ ted[0] }} </h3>
        <h4 class="movie-year"> {{ ted[1].author }} - {{ ted.year }} </h4>
        <p class="movie-description"> {{ ted[1].desc }} </p>
    </div>

</div>

    {% endfor %}
{% endfor %}
