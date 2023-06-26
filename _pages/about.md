---
layout: page
title: About
date: 2017-09-06 8:00:00
permalink: "/about/"
---

<ul class="post-list">
    {% for interest in site.data.settings.interests %}
        <a class="post-link" href="{{ interest.link }}">
            <div class="post-block" style="background-image: url(/assets/img/collection/{{ interest.folder }}/display.jpg)">
                <div class="post-overlay">
                    <div class="post-block-content">
                        <h2>{{ interest.name }}</h2>
                    </div>
                </div>
            </div>
        </a>
    {% endfor %}
</ul>
