---
layout: page
title: Blog
date: 2017-09-06 8:00:00
permalink: "/blog/"
---

<ul class="post-list">
    {% for post in site.posts %}
    <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h2>
    <p>{{ post.category }}</p>
    <p>{{ post.date | date: "%-d %B %Y" }}</p>
    {% endfor %}
</ul>

<div class="world-map">
    {% include world-map.html %}
</div>

<div class="world-map">
    {% include us-map.html %}
</div>