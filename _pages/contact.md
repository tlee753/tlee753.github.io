---
layout: default
title: Contact
date: 2017-09-06 8:00:00
permalink: "/contact/"
---

<div id="contact-page">

    <div id="contact-image"></div>

    <div id="contact-lockup">

        {% for socialmedia in site.data.settings.socialpage %}
            <div class="contact-item">
                <div class="contact-socialicon"><a href="{{ socialmedia.link }}">{% include social-icons/{{ socialmedia.icon }}.html %}</a></div>
                <div class="contact-content"><a href="{{ socialmedia.link }}"><h1>{{ socialmedia.icon }}</h1></a></div>
            </div>
        {% endfor %}

    </div>
    
</div>