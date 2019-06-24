---
layout: page
title: Blog
date: 2017-09-06 8:00:00
permalink: "/blog/"
---

<ul class="post-list">
    {% for post in site.posts %}
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
        <div class="post-block" style="background-image: url(/assets/img/travel/{{ post.thumbnail }})">
            <div class="post-overlay">
                <h2>{{ post.title }}</h2>
                <p>{{ post.category }}</p>
                <p>{{ post.date | date: "%-d %B %Y" }}</p>
            </div>
        </div>
    </a>
    {% endfor %}
</ul>

<div class="world-map">
    {% include world-map.html %}
</div>

<div class="world-map">
    {% include us-map.html %}
</div>