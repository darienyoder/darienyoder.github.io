---
layout: base
title: Projects
permalink: /projects
---

<main>
    <div id="category-list">
        {% for item in site.data.portfolio-categories %}
            <a href="/category:{{ item.link }}"><h2>{{ item.name }}</h2></a>
        {% endfor %}
    </div>
</main>
