---
layout: page
title: Travel
date: 2017-09-06 8:00:00
permalink: "/travel/"
---

<ul class="post-list">
    {% for post in site.posts %}
        {% if post.tags contains "travel" %}
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
                <div class="post-block" style="background-image: url(/assets/img/travel/{{ post.thumbnail }})">
                    <div class="post-overlay">
                        <div class="post-block-content">
                            <h2>{{ post.title }}</h2>
                            <p>{{ post.category }}</p>
                            <p>{{ post.date | date: "%-d %B %Y" }}</p>
                        </div>
                    </div>
                </div>
            </a>
        {% endif %}
    {% endfor %}
</ul>

<div class="world-map">
    {% include world-map.html %}
</div>

<div class="world-map">
    {% include us-map.html %}
</div>